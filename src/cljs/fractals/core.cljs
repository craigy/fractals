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

(defn color-str [color-int]
  (str "#" (.toString color-int 16)))

(defn rand-color []
  (color-str (int (rand 16777215))))

(defn draw-random! []
  (let [canvas (js/document.getElementById "canvas")]
    (when canvas
      (let [ctx (.getContext canvas "2d")
            width (.-width canvas)
            height (.-height canvas)
            img (.createImageData ctx width height)
            pixels (.-data img)]
        (dorun
          (map
            (fn [[x y]]
              (set! (.-fillStyle ctx) (rand-color))
              (.fillRect ctx x y 1 1))
            (for [x (range width)
                  y (range height)]
              [x y])))))))

(defn mandelbrot-color [px py width height]
  (let [x0 (- (* 3.5 (/ px width)) 2.5)
        y0 (- (* 2 (/ py height)) 1)
        max-iter 1000]
    (loop [x 0.0
           y 0.0
           iter 0]
      (if
        (and (< (+ (* x x) (* y y)) (* 2 2)) (< iter max-iter))
        (recur (+ (- (* x x) (* y y)) x0) (+ (* 2 x y) y0) (inc iter))
        (color-str (int (* iter (/ 16777215 max-iter))))))))

(defn draw-mandelbrot! []
  (let [canvas (js/document.getElementById "canvas")]
    (when canvas
      (let [ctx (.getContext canvas "2d")
            width (.-width canvas)
            height (.-height canvas)
            img (.createImageData ctx width height)
            pixels (.-data img)]
        (dorun
          (map
            (fn [[x y]]
              (set! (.-fillStyle ctx) (mandelbrot-color x y width height))
              (.fillRect ctx x y 1 1))
            (for [x (range width)
                  y (range height)]
              [x y])))))))

(js/setTimeout
  draw-mandelbrot!
  1000)

;(let [interval
;  (js/setInterval
;    draw-random!
;    1000)]
;  (swap! app-state assoc :interval interval))

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

