; Copyright (c) 2012 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(defproject himera "0.1.0-SNAPSHOT"
  :description "ClojureScript compiler service."
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/tools.reader "0.9.1"]
                 [ring "1.3.2"]
                 [compojure "1.3.3"]
                 [domina "1.0.3"]
                 [org.clojure/clojurescript "0.0-3211"]]
  :plugins [[lein-cljsbuild "1.0.5"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"],
                :compiler
                {:pretty-print true,
                 :output-dir "resources/public/js/",
                 :output-to "resources/public/js/repl.js",
                 :optimizations :simple},
                :jar true}]}  
  :jvm-opts ["-Djava.security.policy=heroku.policy" "-Xmx80M"]
  :source-paths ["src/clj"]
  :main himera.server.app
  :min-lein-version "2.0.0"
  ;;:hooks [leiningen.js]
  )

