(ns schlepfilter.routes.ja.index
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch]]
            [secretary.core]
            [schlepfilter.helper :as helper]))

(defn app
  []
  (let [state (subscribe [:state])
        submit (:submit @state)]
    [:div
     [:section.jumbotron
      [:h1 "企画"]]
     [:section.container
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:a {:href "./wedding"}
          [:dt "Wedding"]
          [:dd "結婚式の無料メール相談"]]
         [:a {:href "./ama"}
          [:dt "AMA"]
          [:dd "見込み客から電話相談が来る"]]
         [:a {:href "./lawyer"}
          [:dt "Lawyer"]
          [:dd "受任したい事件だけの電話法律相談"]]
         [:a {:href "./speedtalk"}
          [:dt "Speed Talk"]
          [:dd "オンラインで1対1通話の顧客調査"]]
         [:a {:href "./subtitle"}
          [:dt "Subtitle"]
          [:dd "語学のレッスンにリアルタイムの字幕を"]]
         [:a {:href "./transcription"}
          [:dt "Transcription"]
          [:dd "文字起こしから解放される"]]
         [:a {:href "./voicesearch"}
          [:dt "Voice Search"]
          [:dd "会話を録音して検索可能に"]]
         [:a {:href "./tollfree"}
          [:dt "Toll Free"]
          [:dd "フリーダイヤルより安い"]]
         [:a {:href "./callcenter"}
          [:dt "Call Center"]
          [:dd "コールセンターに人工知能を"]]]
        [:a {:href "/"}
         [:p [:strong "その他の企画（英語）"]]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))

(defroute #"/ja/(index\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))
