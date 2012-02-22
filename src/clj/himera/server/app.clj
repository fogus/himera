(ns himera.server.app
  (:use ring.adapter.jetty)
  (:require [himera.server.service :as himera]))

(defn -main
  [port]
  (run-jetty #'himera/app {:port (Integer. port)}))
