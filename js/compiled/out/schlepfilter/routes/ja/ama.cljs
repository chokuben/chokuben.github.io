(ns schlepfilter.routes.ja.ama
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
      [:h1 "見込み客から電話相談が来る"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p [:strong "費用対効果が高い集客を実現します。"]]
        [:ul
         [:li "対応分野を絞れる。"]
         [:li "対応地域を絞れる。"]
         [:li "応じたくない相談は応じる必要がない。"]
         [:li "一部の電話相談を除き無料で使用できる。"]]]]]
     [:section.container
      [:h2 "使い方"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "アプリをインストール（現在、未公開です。）"]
          [:p "ご入力いただいた情報をもとに本人確認を行わせていただきます。"]]
         [:li
          [:h3 "対応可能な分野と地域を入力"]
          [:p "該当する条件に合致する相談のみ受信します。ただし、絞り込みの精度は100%ではありません。"]]
         [:li
          [:h3 "電話相談の申し込みがあると相談の情報が配信される"]
          [:p
           "相談の分野と発信元の地域が表示されます。電話相談に応じたい場合には"
           [:i "電話番号を表示"]
           "ボタンを押すと、電話番号が表示されます。"]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "成約に結びつく相談の割合はどのくらいですか？"]
         [:dd "現にお使いいただいている方からの聞き込みによると1割程度とのことです。"]
         [:dt "他の方が先に"
          [:i "電話番号を表示"]
          "ボタンを押してしまった場合、どうなりますか？"]
         [:dd "当該相談に関しては、電話番号が表示できなくなります。ただし、相談者が再度、電話相談の申し込みをすることは可能です。"]
         [:dt "アプリの価格はいくらですか？"]
         [:dd "インストールは無料です。使用料も基本的に無料です。ただし、システムを維持する財源を確保するために、一部の人気の相談についてのみ有料化することを検討中です。"]
         [:dt "アプリが公開されるのはいつですか？"]
         [:dd "未定です。現在、フィードバックを集めてニーズの調査をしているところです。"]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/ama(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

