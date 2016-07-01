(ns schlepfilter.core
  (:require [secretary.core :as secretary]
            [schlepfilter.routes.index]
            [schlepfilter.handlers :as handlers]
            [schlepfilter.subs :as subs]))

(enable-console-print!)

(handlers/register)
(subs/register)
(secretary/dispatch! js/location.pathname)
