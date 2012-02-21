(ns himera.app
  (:use ring.adapter.jetty)
  (:require [himera.service :as himera]))

(defn -main
  [& args]
  (run-jetty #'himera/app {:port 8080}))
