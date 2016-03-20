(set-env!
 :source-paths #{"src/cljs"}
 :resource-paths #{"html"}

 :dependencies '[[org.clojure/clojure       "1.7.0"     :scope "provided"]
                 [org.clojure/clojurescript "1.7.228"   :scope "provided"]
                 [adzerk/boot-cljs          "1.7.228-1" :scope "test"]
                 [pandeiro/boot-http        "0.7.3"     :scope "test"]
                 [adzerk/boot-reload        "0.4.5"     :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"     :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"     :scope "test"]
                 [weasel                    "0.7.0"     :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.12"    :scope "test"]
                 [boot/core                 "2.5.5"]
                 [reagent                   "0.6.0-alpha"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-reload :refer [reload]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])


(deftask js
  "Build to JavaScript."
  []
  (comp
    (serve :dir "js")
    (watch)
    (reload)
    (cljs-repl)
    (cljs)
    (target :dir #{"js"})))

(deftask js-prod
  "Build prod JavaScript."
  []
  (comp
    (cljs
      :optimizations :advanced)
    (target :dir #{"js-prod"})))

