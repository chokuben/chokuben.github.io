(ns schlepfilter.routes.ja.lawyer
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
      [:h1 "受任したい事件だけの電話法律相談"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong "費用対効果が高い電話法律相談を実現します。"]]
        [:ul
         [:li "事件種別を絞れる。"]
         [:li "地域を絞れる。"]
         [:li "応じたくない相談は応じる必要がない。"]
         [:li "無料プランから始めて効果を検証できる。"]
         [:li "ホームページで集客するよりもコストを抑えられる。"]]]]]
     [:section.container
      [:h2 "使い方"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "アプリをインストール（現在、未公開です。）"]
          [:p "ご入力いただいた登録番号をもとに本人確認を行わせていただきます。"]]
         [:li
          [:h3 "事件種別と地域を入力"]
          [:p "該当する条件に合致する相談のみ受信します。ただし、絞り込みの精度は100%ではありません。"]]
         [:li
          [:h3 "電話相談の申し込みがあると事件の情報が配信される"]
          [:p
           "事件種別と地域が表示されます。電話相談に応じたい場合には"
           [:i "電話番号を表示"]
           "ボタンを押すと、電話番号が表示されます。"]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "弁護士法72条に反しませんか？"]
         [:dd "システム使用料として料金が発生するので、弁護士法72条に反しないと考えています。"]
         [:dt "受任に結びつく事件の割合はどのくらいですか？"]
         [:dd "現にお使いいただいている先生からの聞き込みによると1割程度とのことです。"]
         [:dt "他の弁護士が先に"
          [:i "電話番号を表示"]
          "ボタンを押してしまった場合、どうなりますか？"]
         [:dd "当該相談に関しては、電話番号が表示できなくなります。ただし、依頼者が再度、電話相談の申し込みをすることは可能です。"]
         [:dt "アプリの価格はいくらですか？"]
         [:dd "インストールは無料です。人気の事件種別に関しては、相談者の電話番号を表示する時点で料金が発生する場合があります。料金は事件種別、地域、時間帯によって変動します。"]
         [:dt "アプリが公開されるのはいつですか？"]
         [:dd "未定です。現在、フィードバックを集めてニーズの調査をしているところです。"]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/lawyer(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

