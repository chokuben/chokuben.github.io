(ns schlepfilter.routes.ja.wedding
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
       :placeholder "メールアドレス"
       :required    true
       :type        :email}]
     [:textarea.form-control
      {:name        :value3
       :placeholder "相談内容"
       :required    true}]
     [:button.btn.btn-success.btn-block
      (if submit
        "ご相談を受け付けました。"
        "送信する")]]]])

(defn app
  []
  (let [state (subscribe [:state])
        submit (:submit @state)]
    [:div
     [:section.jumbotron
      [:h1 "結婚式の無料メール相談"]
      [form-component submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p [:strong "結婚式に関するどんなことでもご相談をお受けします。"]]
        [:ul
         [:li "相談を受けるのは"
          [:strong "10年間"]
          "で約"
          [:strong "1000件"]
          "の相談経験があり、"
          [:strong "IWPAとBIAの認定"]
          "を受けたウェディングプランナーのみ"]
         [:li "特定の式場に所属していないフリーのプランナーだからアドバイスは"
          [:strong "公正中立"]]
         [:li "メール相談はもちろん、初回の面談、初回の電話相談まで" [:strong "無料"]]
         [:li "通常は"
          [:strong "24時間以内"]
          "に回答(繁忙期はプランナーからお返事ができない可能性があります。)"]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "他の相談窓口とどこが違いますか？"]
         [:dd "経験と中立性が全く違います。ブライダル業界は離職率が高く、10年以上経験があるプランナーは数えるほどしかいません。また式場のプランナーは、式場の売上を優先させることから、中立的なアドバイスができないことが多々あります。独立したてのフリーのプランナーも特定の式場と関係があって、キックバックをもらっているということが多いです。"]
         [:dt "どんな相談がありますか？"]
         [:dd "結婚式場をどこにするか、招待状の文面をどうするか、コンセプトをどうするかなど小さなことから大きなことまでいろいろなご相談があります。"]
         [:dt "対応地域は？"]
         [:dd "日本国内はもちろん"
          [:strong "世界中どこでも"]
          "対応します。海外在住の方や外国の方からのご相談も多数受け付けてきました。"]
         [:dt "どうして無料なのですか？"]
         [:dd "ウェディングプランナーとしてプロデュースをご依頼されるお仕事では、どうしても客層が偏ってしまいます。そこで、一般の方の結婚式に関する意識を把握しトレンドに敏感であり続けるために無料相談を受け付けています。また、無料相談をお受けした方の中には、有料の結婚式のプロデュースなどをご依頼くださる方もいらっしゃるので、窓口を広げるという意義もあります。"]
         [:dt "個人情報は守られますか？"]
         [:dd "IWPAとBIAの認定を受けたウェディングプランナーが相談を受けますので、部外者に個人情報を漏らすことは一切ありません。"]
         [:dt "男性も相談できますか？"]
         [:dd "できます。実際に、男性からのご相談の方が多いです。"]]]]]
     [:footer.jumbotron
      [:h2 "結婚式の無料メール相談"]
      [form-component submit]]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/wedding(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

