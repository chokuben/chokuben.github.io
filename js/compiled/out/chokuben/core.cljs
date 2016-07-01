(ns chokuben.core
  (:require [secretary.core :as secretary]
            [chokuben.routes.index]
            [chokuben.handlers :as handlers]
            [chokuben.subs :as subs]))

(enable-console-print!)

(handlers/register)
(subs/register)
(secretary/dispatch! js/location.pathname)
