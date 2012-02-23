(ns himera.server.service
  (:use compojure.core)
  (:use ring.middleware.clj-params)
  (:require [clojure.string :as string])
  (:require [himera.server.cljs :as cljs]
            [compojure.route :as route]
            [ring.util.response :as resp]))

;; (str "{\"js\" : " (string/trim-newline (if-let [d (:js data)] (pr-str d) "null")) "}")

(defn generate-response [data & [status]]
  (let [ret-val (pr-str {:js (string/trim-newline (:js data))})]
    (println ret-val)
    {:status (or status 200)
     :headers {"Content-Type" "application/clojure"}
     :body ret-val}))

(defroutes handler
  (GET "/" [] (resp/redirect "/index.html"))

  (PUT "/" [name]
       (generate-response {:hello name}))

  (POST "/compile" [expr]
        (generate-response (cljs/compilation expr :simple false)))

  (route/resources "/"))

(def app
  (-> handler
      wrap-clj-params))

