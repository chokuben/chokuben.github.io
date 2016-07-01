(ns schlepfilter.routes.index
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [secretary.core]
            [schlepfilter.helper :as helper]))

(defn app
  []
  (let [state (subscribe [:state])
        submit (:submit @state)]
    [:div
     [:section.jumbotron
      [:h1 "Projects"]]
     [:section.container
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:a {:href "/subtitle"}
          [:dt "Subtitle"]
          [:dd "Real-time subtitle for your language lesson"]]
         [:a {:href "/speedtalk"}
          [:dt "Speed Talk"]
          [:dd "Chatroulette for customer interview"]]
         [:a {:href "/actionablescience"}
          [:dt "Actionable Science"]
          [:dd "Practical scientific advice you can act on today"]]
         [:a {:href "/studyhall"}
          [:dt "Study Hall"]
          [:dd "Broadcast yourself and get more done"]]
         [:a {:href "/voicesearch"}
          [:dt "Voice Search"]
          [:dd "Record and search all your conversations"]]]
        [:a {:href "/ja"}
         [:p [:strong "More Projects in Japanese"]]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))

(defroute "/" []
          (r/render [app]
                    (.getElementById js/document "app")))
