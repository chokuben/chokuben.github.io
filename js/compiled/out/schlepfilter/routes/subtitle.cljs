(ns schlepfilter.routes.subtitle
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
      [:h1 "Real-time subtitle for your language lesson"]
      [(helper/make-email-form-component :en) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong "Get the most out of online language lessons by"]]
        [:ul
         [:li "seeing the subtitles for your language class as you listen"]
         [:li "looking up the words you don't know"]
         [:li "bookmarking the sentences you want to review and replay after the class"]
         [:li "searching for the words you heard and replay after the class "]
         [:li "talking to a native speaker immediately with one-click"]
         [:li "finding your ideal language exchange partner"]]]]]
     [:section.container
      [:h2 "How will it work"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "Plug in earphones or headphones"]
          [:p "If you don't use earphones or headphones, subtitles will be less accurate."]]
         [:li
          [:h3 "Go to our website (we haven't built it yet)"]
          [:p "You will be prompted to create a chat room for your language class, and a link to the room will be generated."]]
         [:li
          [:h3 "Go to the chat room you created"]
          [:p "Ask your teacher or language partner to go to the chat room as well."]]
         [:li
          [:h3 "Start speaking"]
          [:p "When both of you are ready, simply start speaking, and subtitles will be shown."]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "How accurate are the subtitles?"]
         [:dd "The accuracy will be higher than 90%.  There will be some errors, but the overall meaning will be understandable."]
         [:dt "How can I improve the accuracy?"]
         [:dd "You can use a mic in a quiet environment."]
         [:dt "Can I use Skype for a call and get its subtitle?"]
         [:dd "Yes.  Our website will work with Skype and other third-party voice calling app"]
         [:dt "Is audio being recorded?"]
         [:dd "Yes.  It's temoporarily stored on the browser and can be saved to your local file system."]
         [:dt "How much will it cost?"]
         [:dd "The basic feature like real-time subtitle will be free.  We'll be experimenting with pricing models for advanced features."]
         [:dt "When will the website be released?"]
         [:dd "We don't know yet.  We're now gathering feedback to decide the viability of the app."]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))

(defroute #"/subtitle(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

