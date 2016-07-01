(ns chokuben.helper
  (:require [re-frame.core :refer [subscribe dispatch]]))

(defn translate
  ;; tower is not used because it requires :<key>! -style translation.  See
  ;; https://github.com/ptaoussanis/tower
  [& ks]
  (get-in {:en {:email               "Email address"
                :notification-submit "Get notified when we launch"
                :sent                "Thank you!"
                :feedback            "Feedback"
                :feedback-request    "Tell us what you think"
                :feedback-submit     "Send feedback"}
           :ja {:email               "メールアドレス"
                :notification-submit "リリース時に通知を受け取る"
                :sent                "送信完了"
                :feedback            "フィードバック"
                :feedback-request    "ご意見をお聞かせください"
                :feedback-submit     "フィードバックを送信する"}}
          ks))

;location.href will be shortened by ifttt
(defn pathname-component
  []
  [:input
   {:name  :value1
    :value js/location.pathname
    :type  :hidden}])

(defn make-email-component
  [language]
  (fn []
    [:input.form-control
     {:name        :value2
      :placeholder (translate language :email)
      :required    true
      :type        :email}]))

(defn make-email-form-component
  [language]
  (fn [submit]
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
       [pathname-component]
       [:input.form-control
        {:name        :value2
         :placeholder (translate language :email)
         :required    true
         :type        :email}]
       [:button.btn.btn-success.btn-block
        (if submit
          (translate language :sent)
          (translate language :notification-submit))]]]]))

(defn make-feedback-form-component
  [language]
  (fn [submit]
    [:footer.jumbotron
     [:h2 (translate language :feedback-request)]
     [:div.container
      [:div.row
       [:form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4
        {:action    "https://maker.ifttt.com/trigger/post/with/key/ddlyHDwEcvSJJCcs5ZtpReGw61OOMkRWOSGyzbFhsGe"
         :method    :post
         :on-submit #(dispatch [:submit])
         :target    :iframe}
        [pathname-component]
        [(make-email-component language)]
        [:textarea.form-control
         {:name        :value3
          :placeholder (translate language :feedback)
          :required    true}]
        [:button.btn.btn-success.btn-block
         (if submit
           (translate language :sent)
           (translate language :feedback-submit))]]]]]))

