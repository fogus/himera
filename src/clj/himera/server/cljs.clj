; Copyright (c) 2012, 2013 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(ns himera.server.cljs
  (:require [cljs.compiler :as comp]
            [cljs.analyzer :as ana])
  (:require [himera.server.setup :as setup])
  (:import [java.io PushbackReader BufferedReader StringReader]
           [clojure.lang ISeq]))

(declare exp)

(defn build [action locals expr opt pp]
  {:result
   (binding [ana/*cljs-ns* 'cljs.user]
     (let [env {:ns (@ana/namespaces ana/*cljs-ns*)
                :uses #{'cljs.core}
                :context :expr
                :locals locals}]
       (with-redefs [ana/get-expander exp]
         (action env expr))))
   :status 200})

(def compilation (partial build
                          #(comp/emit-str (ana/analyze % %2))
                          (setup/load-core-names)))

(def analyze (partial build
                      #(ana/analyze % %2)
                      {}))


;; privates

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
    (let [sym (symbol (.getName sym))]
      (when (and mvar (or (setup/clojure-macros sym) (setup/cljs-macros sym)))
        @mvar))))