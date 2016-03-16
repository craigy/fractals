(ns fractals.core
  (:require
    [reagent.core :as r]))

(enable-console-print!)

(defonce app-state
  (r/atom
    {:roster {}
     :result nil}))

(defn app []
  [:div
   [:h1 "Fractals"]])

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

