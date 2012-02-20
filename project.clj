(defproject himera "0.0.1-SNAPSHOT"
  :description "ClojureScript compiler service."
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring "1.0.2"]
                 [compojure "1.0.1"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-927"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [org.mozilla/rhino "1.7R3"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]]
  :source-path "src/clj"
  :main himera.app)

