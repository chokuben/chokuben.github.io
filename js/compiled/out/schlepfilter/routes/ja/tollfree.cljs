(ns schlepfilter.routes.ja.tollfree
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
      [:h1 "フリーダイヤルより安い"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "従来の電話とここが違う："]]
        [:ul
         [:li "通話料金はかける方も受ける方も完全無料。"]
         [:li "Google Analyticsと連動して電話のアクセス解析。"]
         [:li "通話を自動録音。"]
         [:li "通話を自動で文字化するから検索が簡単。"]]]]]
     [:section.container
      [:h2 "導入の流れ"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "管理用ウェブサイトでユーザー登録（現在、未公開です。）"]
          [:p "メールアドレスとパスワードを入力するだけです。"]]
         [:li
          [:h3 "着信用アプリをインストール（現在、未公開です。）"]
          [:p "登録したメールアドレスとパスワードの入力を求められます。"]]
         [:li
          [:h3 "埋め込み用スクリプトをコピー＆ペースト"]
          [:p "管理用ウェブサイトにスクリプトが生成されます。ご自身のウェブサイトに
            コピー＆ペーストしてください。"]]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/tollfree(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

