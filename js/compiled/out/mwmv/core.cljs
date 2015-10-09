(ns ^:figwheel-always mwmv.core
    (:require [clojure.string :as str]))

(enable-console-print!)

; ;; define your app data so that it doesn't get over-written on reload
; (defonce app-state (atom {:text "Hello world!"}))

; (defn on-js-reload []
;   ;; optionally touch your app-state to force rerendering depending on your application
;   (swap! app-state update-in [:__figwheel_counter] inc))

(defn parse-string [s]    (subs s 1 (dec (count s))))
(defn parse-date   [date] (js/Date. (str/join "-" (reverse (str/split date #"/")))))
(defn parse-float  [f]    (.parseFloat js/window f))
(defn round-cents  [f]    (/ (Math/round (* 100 f)) 100))

(defn parse-row
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
  "Returns a vector like [2015 2] from a date object in Feb 2015"
  [date]
  [(.getFullYear date) (.getMonth date)])

(def get-yearmonth "Returns the yearmonth of an entry" (comp yearmonth :date))

(defn yearmonth->str
  "A human readable yearmonth"
  [[year month]]
  (let [months ["Jan" "Feb" "Mars" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"]]
    (str (months month) " " year)))

(defn get-timespan
  "Returns a timespan covering exactly the provided entries"
  [entries]
  (->> entries
       (map (comp yearmonth :date))
       (distinct)
       (sort)))

(defn total-per-month
  "Total expenses for every month in timespan"
  [entries timespan]
  (map
    (fn [yearmonth]
      (->> entries
        (filter #(= yearmonth (get-yearmonth %)))
        (map :amount)
        (map -) ; Invert to show expenses as positive
        (reduce + 0)
        (round-cents)))
    timespan))

(defn columns
  "Creates a sequence of columns"
  [entries timespan]
  (->> entries
       (group-by :category)
       (map (fn [[category entries]]
              (cons category (total-per-month entries timespan))))))



;;; ------------------- JavaScript stuff ---------------------



(def chart-element-selector "#chart")

(defn generate-line-chart
  [entries timespan]
  (clj->js
    {
     :bindto chart-element-selector
     :data   { :columns (columns entries timespan) }
     :axis
     {
      :x {
          :type "category"
          :categories (map yearmonth->str timespan)
          }
      }}))

(defn render-chart
  [chart]
  (.generate js/c3 chart))


(def file-input (-> js/document (.getElementById "csv")))
(def reader     (js/FileReader.))

; Load data into graph
(.addEventListener
  reader
  "load"
  #(render-chart
     (let [entries (parse-csv (.-result reader))]
      (generate-line-chart
        entries
        (get-timespan entries)))))

; Read file
(.addEventListener
  file-input
  "change"
  (fn [e]
    (let [file (-> file-input (.-files) (aget 0))]
      (println (.-name file))
      (.readAsText reader file))))
