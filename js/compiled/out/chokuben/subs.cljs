(ns chokuben.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))

(defn register
  []
  (register-sub
    :state
    (fn [db _]
      (reaction @db))))
