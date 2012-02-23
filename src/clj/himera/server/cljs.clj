(ns himera.server.cljs
  (:require [cljs.compiler :as comp]
            #_[cljs.closure :as cljsc])
  (:import [java.io PushbackReader BufferedReader StringReader]
           [clojure.lang ISeq]))

(defn- exp [sym env]
  (let [mvar
        (when-not (or (-> env :locals sym)        ;locals hide macros
                      (-> env :ns :excludes sym))
          (if-let [nstr (namespace sym)]
            (when-let [ns (cond
                           (= "clojure.core" nstr) (find-ns 'cljs.core)
                           (.contains nstr ".") (find-ns (symbol nstr))
                           :else
                           (-> env :ns :requires-macros (get (symbol nstr))))]
              (.findInternedVar ^clojure.lang.Namespace ns (symbol (name sym))))
            (if-let [nsym (-> env :ns :uses-macros sym)]
              (.findInternedVar ^clojure.lang.Namespace (find-ns nsym) sym)
              (.findInternedVar ^clojure.lang.Namespace (find-ns 'cljs.core) sym))))]
    (when mvar @mvar)))

(defn build [expr opt pp]
  {:js
   (binding [comp/*cljs-ns* 'cljs.user]
     (let [env {:ns (@comp/namespaces comp/*cljs-ns*)
                :context :expr
                :locals {}}]
       (with-redefs [comp/get-expander exp]
         (comp/emits (comp/analyze env expr)))))
   :status 200})

(defn compilation
  [form opt pp]
  (-> form
      (build opt pp)))
