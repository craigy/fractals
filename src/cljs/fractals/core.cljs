(ns fractals.core
  (:require
    [reagent.core :as r]))

(enable-console-print!)

(defonce app-state
  (r/atom {:iterations 35}))

(defn color-str
  ([r g b]
   (str "#" (.toString r 16) (.toString g 16) (.toString b 16)))
  ([r g b a]
   (str "rgba(" r ", " g ", " b ", " a ")")))

(defn mandelbrot-color [px py width height max-iter]
  (let [x0 (- (* 3.5 (/ px width)) 2.5)
        y0 (- (* 3 (/ py height)) 1.5)]
    (loop [x 0.0
           y 0.0
           iter 0]
      (if
        (and (< (+ (* x x) (* y y)) (* 2 2)) (< iter max-iter))
        (recur (+ (- (* x x) (* y y)) x0) (+ (* 2 x y) y0) (inc iter))
        (let [d (- 255 (int (* iter (/ 255 max-iter))))]
          {:r d :g d :b d :a (* iter (/ 255 max-iter))})))))

(defn draw-remaining [ctx id d width height max-iter coords t]
  (dorun
    (map
      (fn [[x y]]
        (let [color (mandelbrot-color x y width height max-iter)]
          (aset d 0 (:r color))
          (aset d 1 (:g color))
          (aset d 2 (:b color))
          (aset d 3 (:a color))
          (.putImageData ctx id x y)))
      (take t coords)))
  (when (= max-iter (:iterations @app-state))
    (js/window.requestAnimationFrame #(draw-remaining ctx id d width height max-iter (drop t coords) t))))

(defn draw-mandelbrot! [max-iter]
  (let [canvas (js/document.getElementById "mandelbrot")]
    (when canvas
      (let [ctx (.getContext canvas "2d")
            width (.-width canvas)
            height (.-height canvas)
            img (.createImageData ctx width height)
            pixels (.-data img)
            id (.createImageData ctx 1 1)
            d (.-data id)]
        (set! (.-fillStyle ctx) "#FFFFFF")
        (.fillRect ctx 0 0 width height)
        (draw-remaining
          ctx id d width height max-iter
          (for [x (range width)
                y (range height)]
            [x y])
          2000)))))

(draw-mandelbrot! (:iterations @app-state))

(defn on-change-iterations [event]
  (let [iter (.-value (.-target event))]
    (swap! app-state assoc :iterations iter)
    (draw-mandelbrot! iter)))

(defn app []
  [:div
   "Iterations: "
   [:input {:type "number"
            :min 0
            :step 1
            :value (:iterations @app-state)
            :on-change on-change-iterations}]])

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)
