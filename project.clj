(defproject himera "0.0.1-SNAPSHOT"
  :description "ClojureScript compiler service."
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring "1.0.2"]
                 [compojure "1.0.1"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-927"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [org.mozilla/rhino "1.7R3"]
                 [lein-cljsbuild "0.0.13"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]]
  :cljsbuild {:source-path "src/cljs"
              :jar true
              :compiler
              {:output-dir "resources/public/"
               :output-to "resources/public/repl.js"
               :optimizations :simple
               :pretty-print true}}
  :jvm-opts ["-Djava.security.policy=heroku.policy" "-Xmx80M"]
  :source-path "src/clj"
  :main himera.server.app
  :hooks [leiningen.js leiningen.cljsbuild])

