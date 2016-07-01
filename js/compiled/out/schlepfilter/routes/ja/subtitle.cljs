(ns schlepfilter.routes.ja.subtitle
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
      [:h1 "語学のレッスンにリアルタイムの字幕を"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong "オンラインの語学レッスンをさらに効率化する機能を搭載しています。"]]
        [:ul
         [:li "耳で聞く言葉と連動してリアルタイムで自動で字幕が表示される。"]
         [:li "知らない単語の意味を調べられる。"]
         [:li "復習したい文をブックマークしておいて、あとで聞き返せる。"]
         [:li "単語で検索して、その単語が使われていた箇所を聞き返せる。"]
         [:li "ネイティブ・スピーカーとすぐに会話を始められる。"]
         [:li "自分にぴったりの言語交換のパートナーを探せる。"]]]]]
     [:section.container
      [:h2 "使い方"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "イヤフォンまたはヘッドフォンを差し込む"]
          [:p "イヤフォンまたはヘッドフォンを使わないと精度が下がります。"]]
         [:li
          [:h3 "ウェブサイトで登録（現在、未公開です。）"]
          [:p "ウェブサイト上で自分用のチャットルームを作成すると、そのチャットルームへのリンクが表示されます。"]]
         [:li
          [:h3 "チャットルームに入る"]
          [:p "先生や言語交換のパートナーにも同じチャットルームに入っていただきます。"]]
         [:li
          [:h3 "話し始める"]
          [:p "全員準備ができたら話し始めてください。自動的に字幕が表示されます。"]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "字幕の精度を教えてください。"]
         [:dd "精度は90%以上です。ところどころ誤字脱字があるけれども、全体として意味はわかる程度です。"]
         [:dt "どうやって精度を高めることができますか？"]
         [:dd "静かな環境下でマイクを使ってください。"]
         [:dt "スカイプ上の会話に字幕をつけることはできますか？"]
         [:dd "はい。このウェブサイトはスカイプや他社のアプリと併用することができます。"]
         [:dt "音声は録音されていますか？"]
         [:dd "はい。音声はブラウザ上で一時的に保存されており、ローカルのファイルシステム上にコピーすることもできます。"]
         [:dt "価格はいくらですか？"]
         [:dd "自動字幕などの基本的な機能は無料です。高度な機能については価格を検討中です。"]
         [:dt "ウェブサイトはいつ公開されますか？"]
         [:dd "未定です。現在フィードバックを収集して今後の展開を検討中です。"]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))

(defroute #"/ja/subtitle(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

