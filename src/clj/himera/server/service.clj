; Copyright (c) 2012, 2013 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(ns himera.server.service
  (:use compojure.core)
  (:require [clojure.string :as string])
  (:require [himera.server.cljs :as cljs]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [clojure.tools.reader :as reader]))

(defn generate-response [transformer data & [status]]
  (let [ret-val (transformer data)]
    {:status (or status 200)
     :headers {"Content-Type" "application/clojure; charset=utf-8"}
     :body ret-val}))

(def generate-js-response (partial generate-response
                                   (fn [data]
                                     (let [code (or (:result data) "'HIMERA ERROR: NOTHING GENERATED'")]
                                       (pr-str {:js (string/trim-newline code)})))))

(def generate-ast-response (partial generate-response
                                    (fn [data]
                                      (pr-str {:ast (:result data)}))))

(defroutes handler
  (GET "/" [] (resp/redirect "/index.html"))

  (PUT "/" [name]
       (generate-response {:hello name}))

  (POST "/compile" [expr]
        (generate-js-response (cljs/compilation expr :simple false)))

  (POST "/ast" [expr]
        (generate-ast-response (cljs/analyze expr :simple true)))

  (route/resources "/"))

(defn- clj-request?
  [req]
  (if-let [^String type (:content-type req)]
    (not (empty? (re-find #"^application/(vnd.+)?clojure" type)))))

(defn wrap-clj-params
  [handler]
  (fn [req]
    (if-let [body (and (clj-request? req) (:body req))]
      (let [bstr (slurp body)
            clj-params (binding [*read-eval* false]
                         (reader/read-string {:read-cond :allow :features #{:cljs}} bstr))
            req* (assoc req
                   :clj-params clj-params
                   :params (merge (:params req) clj-params))]
        (handler req*))
      (handler req))))

(def app
  (-> handler
      wrap-clj-params))

