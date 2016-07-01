(ns schlepfilter.routes.ja.voicesearch
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
     [:h1 "会話を録音して検索可能に"]
     [(helper/make-email-form-component :ja) submit]]
    [:section.container
     [:div.row
      [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
       [:p
        [:strong
         "検索可能な録音データでこんなことができるようになります。"]]
       [:ul
        [:li "面白かった瞬間を保存し他の人とシェアする。"]
        [:li "言った言わないの争いで決定的証拠を残す。"]
        [:li "メモを取る煩わしさから開放される。"]]]]]
    [:section.container
     [:h2 "使い方"]
     [:div.row
      [:div.col-lg-8.col-lg-offset-2
       [:ol
        [:li
         [:h3 "会話の録音が法律に触れないか確認"]
         [:p "会話を録音することが違法とされている地域もあります。"]]
        [:li
         [:h3 "アプリをインストール（現在、未公開です。）"]
         [:p "デフォルトで全ての会話を録音します。"]]
        [:li
         [:h3 "キーワードで検索"]
         [:p "会話の中でキーワードが使われている箇所が再生されます。"]]]]]]
    [:section.container
     [:h2 "Q&A"]
     [:div.row
      [:div.col-lg-8.col-lg-offset-2
       [:dl
        [:dt "会話を録音するのは違法ではないですか？"]
        [:dd "会話を録音することが違法とされている地域もあります。そのような地域ではアプリを使用されないようお願いしています。"]
        [:dt "会話を録音するのは倫理に反するのではないですか？"]
        [:dd "わかりません。各ユーザー様の判断にお任せしています。通話録音アプリは多くの方にダウンロードされています。もちろん、会話録音と通話録音では違いがありますし、通話録音も倫理に反するという考えもあると思います。"]
        [:dt "このアプリは監視社会を助長するのではないですか？"]
        [:dd "わかりません。しかし、録音データは暗号化され、バックアップ機能を有効にしない限りスマートフォン内に保存されるだけです。"]
        [:dt "このアプリはトイレの中でも録音するのですか？"]
        [:dd "理論上はされません。このアプリは、会話のみを録音することが予定されています。しかし、その技術は完璧なものではないので、トイレの中でも録音されてしまうという可能性はあります。"]
        [:dt "このアプリはバッテリーの消費が激しいのではないですか？"]
        [:dd "たしかにバッテリーの消費が早くなってしまいます。しかし、バッテリーの消費を最小限に抑える改良を行うことによって、平均的な使い方で12時間持続することができるようになると考えています。"]
        [:dt "録音データによって保存容量が圧迫されるのではないですか？"]
        [:dd "たしかに録音データは一定の容量を使います。しかし、データを最小化する改良を行うことによって、平均的な使い方で6ヶ月分の録音データを保存することができるようになると考えています。"]]]]]
    [(helper/make-feedback-form-component :ja) submit]
    ;; iframe is a hack for working around the same origin policy.
    [:iframe
     {:name :iframe}]]))


(defroute #"/ja/voicesearch(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

