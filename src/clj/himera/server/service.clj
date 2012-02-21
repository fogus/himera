(ns himera.server.service
  (:use compojure.core)
  (:use ring.middleware.clj-params)
  (:require [himera.server.cljs :as cljs]))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/clojure"}
   :body (print-str data)})

(defroutes handler
  (GET "/" []
       (generate-response {:hello :cleveland}))

  (PUT "/" [name]
       (generate-response {:hello name}))

  (POST "/compile" [expr]
        (generate-response (cljs/compile expr :advanced true))))

(def app
  (-> handler
      wrap-clj-params))

