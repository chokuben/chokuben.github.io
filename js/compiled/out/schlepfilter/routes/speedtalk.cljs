(ns schlepfilter.routes.speedtalk
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
      [:h1 "Chatroulette for customer interview"]
      [(helper/make-email-form-component :en) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "Finding interviewees has never been easier because our app will let you"]]
        [:ul
         [:li "find people who are willing to talk to you"]
         [:li "filter interviewees by demographics and needs"]
         [:li "conduct interviews without making an appointment"]
         [:li "conduct interviews without \"getting out of the building\""]]]]]
     [:section.container
      [:h2 "How will it work"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "Install our app (we haven't built it yet)"]
          [:p "Alternatively, you can use our web app without installation (we haven't built it yet, either)."]]
         [:li
          [:h3 "Specify the demographics and needs"]
          [:p "The app will only match you with the interviewees with the specified demographics and needs."]]
         [:li
          [:h3
           "Press "
           [:i "Ready "]
           "when you are ready to talk"]
          [:p "The app will connect you to an interviewee and you'll be able to talk when the interviewee is ready."]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "How long does it take to get a match?"]
         [:dd "It depends on how big the interviewee community will become and what demographics and needs you specify.  But if you are simply looking for a college student, it will take less than a minute even when the community hasn't grown big yet."]
         [:dt "How long can I talk to an interviewee?"]
         [:dd "You can talk as long as the interviewee is willing to talk."]
         [:dt "Can I ask the interviewee to try or buy my service or product?"]
         [:dd "Yes.  But we ask interviewers to follow our guidelines."]
         [:dt "Can I ask the interviewee to provide contact information?"]
         [:dd "Yes.  But we ask interviewers to follow our guidelines."]
         [:dt "Are interviews being recorded?"]
         [:dd "Yes.  You can get recordings on the app for free."]
         [:dt "Are recordings being transcribed?"]
         [:dd "By default, no.  But you can enable machine-transcription at an additional cost."]
         [:dt "Does the app pay interviewees?"]
         [:dd "No.  Interviewees are volunteers."]
         [:dt "Why would interviewees take interviews if they aren't paid."]
         [:dd "Their motives vary.  The most common ones are wanting to get inspired and wanting to learn English."]
         [:dt "How much will the app cost?"]
         [:dd "The app is free to install.  If you don't specify demographics or needs, it's free to use.  Otherwise, it will cost $0.1-100 per interview depending on the demographics and needs you specify."]
         [:dt "What happens if the interviewee hangs up."]
         [:dd "If you haven't talked to the interviewee for more than 10 minutes and the interviewee hangs up, we'll issue a refund."]
         [:dt "What happens if the signal is bad or the interviewee remains silent."]
         [:dd "Please flag the interview, and we'll issue a refund."]
         [:dt "When will the app be released?"]
         [:dd "We don't know yet.  We're now gathering feedback to decide the viability of the app."]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/speedtalk(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

