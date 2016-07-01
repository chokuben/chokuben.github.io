(ns schlepfilter.routes.ja.callcenter
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
      [:h1 "コールセンターに人工知能を"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "こんな課題を抱えていませんか？"]]
        [:ul
         [:li "優良な見込み客かどうかを判定したい。"]
         [:li "お客様の競合他社に対する評価を把握したい。"]
         [:li "言った言わないの問題になったときに該当箇所を聞き直したい。"]
         [:li "オペレーターの対応の品質をモニタリングしたい。"]]]]]
     [:section.container
      [:section.row
       [:image.col-xs-12.col-md-6 {:src "/img/callcenter.png"}]
       [:div.col-xs-12.col-md-6.vertical-center
        [:h2 "見込み客の判定"]
        [:p "利益率の高い商品を大量に購買していただける可能性が高いお客様は特に丁寧に対応したいところです。そのような優良な見込み客かどうかを通話中にリアルタイムで判定して、オペレーターやスーパーバイザーに通知することができます。"]]]
      [:h2 "競合他社の把握"]
      [:p "お客様が通話の中で競合他社の名前を挙げることがあります。そのような通話を分析することによって、お客様が各競合他社に対して持っているイメージを抽出することができます。このデータを用いて、競合他社との差別化戦略を立案することができます。"]
      [:h2 "証拠の検索"]
      [:p "言った言わないの問題が生じたときに、お客様との通話録音の中から該当箇所を瞬時に検索し、再生することができます。あいまい検索にも対応し、「買う」と「購入」のように表現が異なっても検索結果に表れます。"]
      [:h2 "モニタリング"]
      [:p "オペレーターが説明事項を伝えそびれた際に、スーパーバイザーに通知することができます。また、お客様の声色や発言内容からお客様満足度を判定し、オペレーターの評価指標を提供することができます。"]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/callcenter(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

