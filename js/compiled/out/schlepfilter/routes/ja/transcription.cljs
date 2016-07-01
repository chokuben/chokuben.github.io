(ns schlepfilter.routes.ja.transcription
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
      [:h1 "文字起こしから解放される"]
      [(helper/make-email-form-component :ja) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong "従来の文字起こしはこんな問題がありました。"]]
        [:ul
         [:li "人力の文字起こしは録音時間の3倍近く時間がかかる。"]
         [:li "自動文字起こしは精度が低い。"]
         [:li "自動文字起こしでは誰が何を話したかがわからない。"]
         [:li "文字起こしを外注すると納品までに数日かかる。"]]]]]
     [:section.container
      [:h2 "使い方"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:ol
         [:li
          [:h3 "マイクを使って録音した音声ファイルを用意"]
          [:p "発言者がつけているピン・マイクなど、録音環境が整っていないと文字起こしの精度が低くなります。発言者が複数いる場合には、発言者ごとに別々の音声ファイルとして録音されていると精度が高まります。"]]
         [:li
          [:h3 "音声ファイルを専用ウェブサイト(現在未公開)にアップロード"]
          [:p "アップロードが完了すると、最初の1分間が無料サンプルとして文字起こしされます。"]]
         [:li
          [:h3 "お支払い"]
          [:p "音声の長さに応じてお支払い金額が決まります。お支払いが完了すると音声全体が文字起こしされ、登録したメールアドレス宛に文字起こしの全文が送信されます。"]]]]]]
     [:section.container
      [:h2 "Q&A"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:dt "文字起こしの精度はどれくらいですか？"]
         [:dd "録音環境が整っていれば、90%以上の精度が出ます。ところどころ誤字脱字があるけれども、全体として意味はわかる程度です。ラフな文字起こしとしてご利用いただけます。"]]
        [:dl
         [:dt "動画ファイルの文字起こしはできますか？"]
         [:dd "可能です。動画ファイルをアップロードしていただくと、サーバー側で自動的に音声ファイルのみを抽出して文字起こしをします。"]]
        [:dl
         [:dt "料金はいくらですか？"]
         [:dd "未定です。発言者の数によっても異なりますが、1時間の音声ファイルで200-2000円を想定しています。"]]
        [:dl
         [:dt "文字起こしにかかる時間はどれくらいですか？"]
         [:dd "アップロードにかかる時間+5分程度です。光回線であれば、1時間の音声ファイルを10分以内に文字起こしすることも可能です。"]]
        [:dl
         [:dt "既存の自動文字起こしソフトとの違いは何ですか？"]
         [:dd "既存の文字起こしソフトは、精度が低いか、あるいは、短時間しか文字起こしできないものが多いです。高精度で長時間の自動文字起こしができること、それが最大の違いです。"]]]]]
     [(helper/make-feedback-form-component :ja) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/ja/transcription(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))

