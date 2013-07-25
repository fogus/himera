; Copyright (c) 2012, 2013 Fogus and Relevance Inc. All rights reserved.  The
; use and distribution terms for this software are covered by the Eclipse
; Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
; which can be found in the file COPYING the root of this
; distribution.  By using this software in any fashion, you are
; agreeing to be bound by the terms of this license.  You must not
; remove this notice, or any other, from this software.

(ns himera.server.app
  (:use ring.adapter.jetty)
  (:require [himera.server.service :as himera])
  (:gen-class :main true))

(defn -main
  [port]
  (run-jetty #'himera/app {:port (Integer. port)}))
