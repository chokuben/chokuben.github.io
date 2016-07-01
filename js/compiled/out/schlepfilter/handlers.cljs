(ns schlepfilter.handlers
  (:require [ajax.core :refer [POST]]
            [re-frame.core :refer [dispatch register-handler trim-v]]))

(defn register
  []
  (register-handler
    :submit
    trim-v
    (fn [db _]
      (assoc db :submit true))))
