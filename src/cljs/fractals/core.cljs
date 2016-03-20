(ns fractals.core)

(enable-console-print!)

(defn color-str
  ([r g b]
   (str "#" (.toString r 16) (.toString g 16) (.toString b 16)))
  ([r g b a]
   (str "rgba(" r ", " g ", " b ", " a ")")))

(defn mandelbrot-color [px py width height]
  (let [x0 (- (* 3.5 (/ px width)) 2.5)
        y0 (- (* 3 (/ py height)) 1.5)
        max-iter 800]
    (loop [x 0.0
           y 0.0
           iter 0]
      (if
        (and (< (+ (* x x) (* y y)) (* 2 2)) (< iter max-iter))
        (recur (+ (- (* x x) (* y y)) x0) (+ (* 2 x y) y0) (inc iter))
        (let [d (- 255 (int (* iter (/ 255 max-iter))))]
          (color-str d d d (* iter (/ 1 max-iter))))))))

(defn draw-mandelbrot! []
  (let [canvas (js/document.getElementById "mandelbrot")]
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

(draw-mandelbrot!)

