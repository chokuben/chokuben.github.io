(ns schlepfilter.routes.studyhall
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe]]
            [secretary.core]
            [schlepfilter.helper :as helper]))

(defn app
  []
  (let [state (subscribe [:state])
        submit (:submit @state)]
    [:div
     [:section.jumbotron
      [:h1 "Broadcast yourself and get more done"]
      [(helper/make-email-form-component :en) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "Work like you do in a library or cafe expect you don't have to"]]
        [:ul
         [:li "pay for coffee"]
         [:li "pay/spend time for transportation"]
         [:li "pay for membership"]
         [:li "worry about opening hours"]
         [:li "worry about your seat being taken"]]]]]
     [:section.container
      [:h2 "How will it work"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "Connect to Wi-Fi"]
          [:p "We recommend using Wi-Fi to avoid unexpected charges for your
            mobile data plan."]]
         [:li
          [:h3 "Go to our website (we haven't built it yet)"]
          [:p "You'll be asked to turn on your camera."]]
         [:li
          [:h3 "Set your camera at the right angle"]
          [:p "You can film your desk or your face.  Just choose whatever you
           feel the most comfortable."]]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/studyhall(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))
