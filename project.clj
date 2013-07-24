; Copyright (c) 2012 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(defproject himera "0.1.0-SNAPSHOT"
  :description "ClojureScript compiler service."
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [ring "1.0.2"]
                 [compojure "1.0.1"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-1847"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [org.mozilla/rhino "1.7R3"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
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
  :source-paths ["src/clj"]
  :main himera.server.app
  ;;:hooks [leiningen.js]
  )

