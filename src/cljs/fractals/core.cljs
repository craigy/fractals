(ns fractals.core
  (:require
    [reagent.core :as r]))

(enable-console-print!)

(defonce app-state
  (r/atom
    {:roster {}
     :result nil}))

(defn canvas-component[]
  [:canvas
   {:id "canvas"
    :width "380"
    :height "380"}])

(defn app []
  [:div
   [:a {:href "https://github.com/craigy/fractals"}
     [:h1 "Fractals"]]
   [canvas-component]])

(when (:interval @app-state)
  (js/clearInterval (:interval @app-state)))

(defn rand-color []
  (str "#" (.toString (int (rand 16777215)) 16)))

(let [interval
  (js/setInterval
    #(let [canvas (js/document.getElementById "canvas")]
      (when canvas
        (let [ctx (.getContext canvas "2d")
              width (.-width canvas)
              height (.-height canvas)
              img (.createImageData ctx width height)
              pixels (.-data img)]
          (set! (.-fillStyle ctx) (rand-color))
          (.fillRect ctx 0 0 width height)))) 1000)]
  (swap! app-state assoc :interval interval))

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

