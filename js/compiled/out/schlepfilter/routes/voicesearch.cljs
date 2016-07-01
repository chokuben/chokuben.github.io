(ns schlepfilter.routes.voicesearch
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
      [:h1 "Record and search all your conversations"]
      [(helper/make-email-form-component :en) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "With searchable recordings of all your conversations you can"]]
        [:ul
         [:li "keep and share hilarious moments"]
         [:li "hold people account for what they say"]
         [:li "become free from taking notes"]]]]]
     [:section.container
      [:h2 "How will it work"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "Make sure the applicable law in your jurisdiction"]
          [:p "It may not be allowed to record your conversations without the consent of the other party."]]
         [:li
          [:h3 "Install our app (we haven't built it yet)"]
          [:p "The app will record all your conversations by default."]]
         [:li
          [:h3 "Search by keywords"]
          [:p "The app will replay the conversations that have the keywords used in them."]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "Isn't it illegal to record conversations?"]
         [:dd "Under some jurisdictions, yes.  We're opposed to the use of the app under those jurisdictions.  The app will notifiy you when we think you are under those jurisdictions."]
         [:dt "Isn't it unethical to record conversations?"]
         [:dd "We don't know.  It's up to you to make that call.  Whether it's unethical or not, many people seem to be using an automatic call recorder app, though we admit it may not be directly comparable to our app."]
         [:dt "Won't the app promote surveillance?"]
         [:dd "We don't know.  However, the recording will encrypted on your phone and won't be stored anywhere unless you turn on backup."]
         [:dt "Will the app keep recording in a bathroom?"]
         [:dd "Theoretically, no.  It'll just try to record conversations only. However, the technology won't be perfect, so it's possible that the noise in a bathroom may get recorded."]
         [:dt "Won't the app drain battery?"]
         [:dd "It will to a certain extent.  But we will optimize the app and hopefully battery will last for 12 hours with average usage.  The app can be turned off to save power."]
         [:dt "Won't the recordings take too much space?"]
         [:dd "It will to a certain extent.  But we will optimize the app and hopefully it can keep up to 6 months worth of recording with average usage."]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/voicesearch(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

