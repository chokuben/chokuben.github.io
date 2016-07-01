(ns chokuben.routes.index
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [secretary.core]))

(defn app
  []
  (let [state (subscribe [:state])]
    [:div
     ""]))

(defroute "/" []
          (r/render [app]
                    (.getElementById js/document "app")))
