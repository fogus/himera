(ns himera.server.app
  (:use ring.adapter.jetty)
  (:require [himera.server.service :as himera]))

(defn -main
  [& args]
  (run-jetty #'himera/app {:port 8080}))
