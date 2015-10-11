(ns ^:figwheel-always mwmv.core
    (:require [clojure.string :as str]))

(enable-console-print!)

(defn parse-string [s] (subs s 1 (dec (count s))))
(defn parse-date   [d] (js/Date. (str/join "-" (reverse (str/split d #"/")))))
(defn parse-float  [f] (.parseFloat js/window f))
(defn round-cents  [f] (/ (Math/round (* 100 f)) 100))

(defn parse-row
  "Turns a row in the csv into a map"
  [row]
  (let [columns (str/split row #",") ; FIXME: Entries with commas in the description will fail
        [_ date category description _ _ _ _ _ _ _ amount _] columns]
    {:date        (parse-date date)
     :category    (parse-string category)
     :description (parse-string description)
     :amount      (parse-float amount)}))

(defn parse-csv
  [csv]
  (->> csv
       (str/split-lines)
       (rest) ; Drop header row
       (map parse-row)))

(defn yearmonth
  "Returns a vector like [2015 1] from a date object in Feb 2015"
  [date]
  [(.getFullYear date) (.getMonth date)])

(def get-yearmonth
  "Returns the yearmonth of an entry"
  (comp yearmonth :date))

(defn yearmonth->str
  "A human readable yearmonth"
  [[year month]]
  (let [months ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"]]
    (str (months month) " " year)))

(defn get-timespan
  "Returns a timespan covering exactly the provided entries"
  [entries]
  (->> entries
       (map get-yearmonth)
       (distinct)
       (sort)))

(defn total-expense
  "The total expense of entries (income is negative)"
  [entries]
  (->> entries
       (map :amount)
       (map -)
       (reduce + 0)
       (round-cents)))

(defn total-expense-for-month
  "The total expense of entries in yearmonth"
  [entries yearmonth]
  (->> entries
       (filter #(= yearmonth (get-yearmonth %)))
       (total-expense)))

(defn total-expense-per-month
  "Total expenses for every month in timespan"
  [entries timespan]
  (map
    (partial total-expense-for-month entries)
    timespan))

(defn columns
  "Creates a sequence of columns"
  [entries timespan]
  (->> entries
       (group-by :category)
       (map (fn [[category entries]]
              (cons category (total-expense-per-month entries timespan))))))


;;; ------------------- JavaScript stuff ---------------------


(def chart-element-selector "#chart")
(def file-input-element     (-> js/document (.getElementById "csv")))
(def file-reader            (js/FileReader.))

(defn generate-line-chart
  "Create the JavaScript structure that c3 needs to render a line graph"
  ([entries]
   (generate-line-chart entries (get-timespan entries)))
  ([entries timespan]
   (clj->js
    {
     :bindto chart-element-selector
     :data   { :columns (columns entries timespan) }
     :axis   {
              :x {
                  :type "category"
                  :categories (map yearmonth->str timespan)}}})))

(defn render-chart
  "Render the chart in the dom"
  [chart]
  (.generate js/c3 chart))

; Load data into graph when file has been read
(.addEventListener
  file-reader
  "load"
  (fn []
    (render-chart
      (generate-line-chart (parse-csv (.-result file-reader))))))

; Read file when chosen
(.addEventListener
  file-input-element
  "change"
  (fn [e]
    (let [file (-> file-input-element (.-files) (aget 0))]
      (.readAsText file-reader file))))
