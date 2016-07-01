(ns schlepfilter.routes.weddingphoto
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [secretary.core]
            [schlepfilter.helper :as helper]))

(defn form-component
  [submit]
  [:div.container
   [:div.row
    [:form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4
     ;; Zapier has 100 tasks/month limit for the free plan.
     ;; SendGrid uses Authorization header which can be set in ajax.
     ;; However, SendGrid has the same origin policy.
     ;; MailGun does not seem to have the capability to limit the
     ;; privilege of an API key.
     {:action    "https://maker.ifttt.com/trigger/post/with/key/ddlyHDwEcvSJJCcs5ZtpReGw61OOMkRWOSGyzbFhsGe"
      :method    :post
      :on-submit #(dispatch [:submit])
      :target    :iframe}
     [helper/pathname-component]
     [:input.form-control
      {:name        :value2
       :placeholder "Email"
       :required    true
       :type        :email}]
     [:textarea.form-control
      {:name        :value3
       :placeholder "How can we help you?"
       :required    true}]
     [:button.btn.btn-success.btn-block
      (if submit
        "Thank you!"
        "Send")]]]])

(defn app
  []
  (let [state (subscribe [:state])
        submit (:submit @state)]
    [:div
     [:section.jumbotron
      [:h1 "Wedding Photography in Japan"]
      [form-component submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "Best value wedding photoshoots are now available for foreign tourists because:"]]
        [:ul
         [:li "You can Bring Your Own Dress(BYOD).  Renting a dress is optional."]
         [:li "We are partnered with resorts known for beautiful scenery all around Japan.
"]]]]]
     [:section.container
      [:h2 "How it works"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "Contact us by filling the form on this page"]
          [:p "We’ll get back to you normally within 24 hours.  We’ll send you some questions to understand your needs and propose a plan."]]
         [:li
          [:h3 "Reply to our email"]
          [:p "We’ll make a proposal based on your needs.  Upon your request, we can also set up a call via WeChat, Line, Skype, WhatsApp, KakaoTalk or phone."]]
         [:li
          [:h3 "Pay 50,000 yen"]
          [:p " If you like our proposal, we’ll ask you to pay 50,000 yen as a non-refundable deposit with your credit card.  We currently accept VISA, MASTER, JCB, AMEX and Diners."]]
         [:li
          [:h3 "Show up for the photoshoot"]
          [:p "The photoshoot takes about 2 to 8 hours."]]
         [:li
          [:h3 "Pay the remaining balance"]
          [:p "After the payment is confirmed, we’ll print your photos and airmail them to your address."]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "Why Bring Your Own Dress (BYOD)?"]
         [:dd "Renting a wedding dress typically costs more than 200,000 yen in Japan.  Believe it or not, Japanese people will happilly pay for it.  Wedding photography studios take advantage of it to make more money."
          [:br]
          "We think it is a form of waste.  We learned from our experience that chances are that you already have a wedding dress you want to wear in a wedding photoshoot.  As a result, you can save about 200,000 yen."]
         [:dt "What locations are available?"]
         [:dd "Our locations include Hokkaido, Okinawa, Tokyo, Kyoto, Mt. Fuji, Nagano, Osaka, Yokohama, Nagoya, Kobe and more.  Even if your preferred location is not listed here, we may be able to work it out for you."]
         [:dt "What is included in a plan?"]
         [:dd "The minimum plan provides only a wedding photographer and location.  Everything else is optional."]
         [:dt "Can I do X?"]
         [:dd "You may be wondering, “Can I bring my own props?”, “Can I hire an interpreter?” and so on.  Yes.  As long as a reasonable request is made before our final proposal, we’ll try to make it happen.  Please don’t hesitate to ask us anything."]
         [:dt "Who are you?"]
         [:dd "We are BYOD Japan, a Japan-based startup founded by a seasoned wedding planner and a polyglot web developer."]]]]]
     [:footer.jumbotron
      [:h2 "Contact us"]
      [form-component submit]]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/weddingphoto(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

