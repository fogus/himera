; Copyright (c) 2012 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(ns himera.server.cljs
  (:require [cljs.compiler :as comp])
  (:require [himera.server.setup :as setup])
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
    (println [sym mvar])
    (let [sym (symbol (.getName sym))]
      (when (and mvar (or (setup/clojure-macros sym) (setup/cljs-macros sym)))
        @mvar))))

(defn build [expr opt pp]
  {:js
   (binding [comp/*cljs-ns* 'cljs.user]
     (let [env {:ns (@comp/namespaces comp/*cljs-ns*)
                :uses #{'cljs.core}
                :context :expr
                :locals (setup/load-core-names)}]
       (with-redefs [comp/get-expander exp]
         (comp/emits (comp/analyze env expr)))))
   :status 200})

(defn compilation
  [form opt pp]
  (-> form
      (build opt pp)))
