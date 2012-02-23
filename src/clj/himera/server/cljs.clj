(ns himera.server.cljs
  (:require [cljs.compiler :as comp])
  (:require [himera.server.setup :as setup])
  (:import [java.io PushbackReader BufferedReader StringReader]
           [clojure.lang ISeq]))

(def ^:private macs (set '[-> ->> ..  and assert comment cond declare defn defn-
                           doto extend-protocol fn for if-let if-not let letfn loop
                           or when when-first when-let when-not while]))

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
    (when (and mvar (macs (symbol (.getName sym))))
      @mvar)))

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
