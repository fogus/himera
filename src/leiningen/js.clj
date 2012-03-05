; Copyright (c) 2012 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(ns leiningen.js
  (:use [leiningen.core :only [prepend-tasks]]
        [leiningen.deps :only [deps]])
  (:require [clojure.java.io :as io]))

(defn js [project]
  (let [js (io/file "resources" "public" "javascript")
        jquery (io/file js "jquery-1.4.2.min.js")
        console (io/file js "jquery.console.js")]
    (when-not (.exists jquery)
      (println "Downloading jquery.")
      (io/copy (io/reader "http://code.jquery.com/jquery-1.4.2.min.js") jquery))
    (when-not (.exists console)
      (println "Downloading jquery-console.")
      (io/copy (io/reader "https://raw.github.com/chrisdone/jquery-console/055c2c212944349ddbb045e8536ebfb2192acb80/jquery.console.js")
               console))))

(prepend-tasks #'deps js)
