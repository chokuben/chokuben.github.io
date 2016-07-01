(ns schlepfilter.routes.ja.local
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
      [:h1 "ネットの何でも屋"]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong "こんなことでお困りではないですか？"]]
        [:ul
         [:li "お店のブログを始めたい"]
         [:li "お店の動画を作りたい"]
         [:li "外国人のお客さんの集客をしたい"]
         [:li "英語メニューを作りたい"]
         [:li "食べログの評価を上げたい"]
         [:li "新商品のモニターがほしい"]
         [:li "キャンペーンを打つ上で相談したい*"]
         [:li "お店のLINEスタンプを作る上で相談したい*"]
         [:li "お店のポイントカードを作る上で相談したい*"]
         [:li "お店のウェブサイトを作る上で相談したい*"]
         [:li "Adwordsについて相談したい*"]
         [:li "SEOについて相談したい*"]
         [:li "法律問題を相談したい*"]]
        [:p "*のついた項目については、ご相談をお受けするだけで、実作業は行いません。"]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "料金はいくらですか？"]
         [:dd "1時間でできる範囲で無料です。"]]
        [:dl
         [:dt "何で無料なのですか？"]
         [:dd "お店とお客さまをつなぐサービスの考案中で、お店側のニーズを知りたいからです。"]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/local(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

