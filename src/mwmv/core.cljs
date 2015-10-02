(ns ^:figwheel-always mwmv.core)

(enable-console-print!)

; (println "Edits to this text should show up in your developer console.")

; ;; define your app data so that it doesn't get over-written on reload

; (defonce app-state (atom {:text "Hello world!"}))


; (defn on-js-reload []
;   ;; optionally touch your app-state to force rerendering depending on
;   ;; your application
;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
; )

;
(def data
    #js {
         :bindto "#chart"
         :data
         #js {
              :columns
              #js [#js ["data1" 300 350 300 0 0 0]
                   #js ["data2" 130 100 140 200 150 50] ]
              :types #js { :data1 "line" :data2 "line" } } })

(def chart
    (.generate js/c3 data))
