(ns himera.server.cljs
  (:refer-clojure :exclude (format compile))
  (:require [cljs.compiler :as comp]
            [cljs.closure :as cljsc])
  (:import [java.io PushbackReader BufferedReader StringReader]
           [clojure.lang ISeq]))

(defn forms-seq [^PushbackReader reader]
  (lazy-seq
   (if-let [form (read reader nil nil)]
     (cons form (forms-seq reader)))))

(extend-protocol cljsc/Compilable
  String
  (-compile [this opts]
    (-> (StringReader. this)
        (BufferedReader.)
        (PushbackReader.)
        forms-seq
        cljsc/compile-form-seq)))

;; (binding [comp/namespaces (atom @comp/namespaces) cljsc/compiled-cljs (atom {})])

#_(defn build
  [expr opt pp]
  (println (str "===> " [expr (class expr)]))
  {:js (cljsc/build expr
                    {:optimizations opt,
                     :pretty-print  pp})
   :status 200})

(defn build [expr opt pp]
  (println (str "===> " [expr (class expr)]))
  {:js
   (binding [comp/*cljs-ns* 'cljs.user]
     (let [env {:ns (@comp/namespaces comp/*cljs-ns*)
                :context :expr
                :locals {}}]
       (comp/emits (comp/analyze env expr))))
   :status 200})

(defn format
  [{:keys [js status]}]
  {:js js})

(defn compile
  [form opt pp]
  (-> form
      (build opt pp)
      format))
