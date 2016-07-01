(ns schlepfilter.routes.actionablescience
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
      [:h1 "practical scientific advice you can act on today"]
      [(helper/make-email-form-component :en) submit]]
     [:section.container
      [:div.row
       [:div.col-md-10.col-md-offset-1.col-lg-8.col-lg-offset-2
        [:p
         [:strong
          "Search for practical scientific advice and you get"]]
        [:ul
         [:li "summaries written in an actionable form."]
         [:li "relevant studies you can act on in real life and no irrelevant
            ones."]
         [:li "experimental studies and no observational ones."]
         [:li "links to the original papers."]]]]]
     [:section.container
      [:h2 "Alternatives"]
      [:div.row
       [:div.col-lg-8.col-lg-offset-2
        [:dl
         [:a {:href "https://scholar.google.com"}
          [:dt "Google Scholar"]]
         [:dd "Google Scholar provides summaries and links.  But the signal
           to noise ratio is too low for the purpose of applying the studies
           to real life."]]
        [:dl
         [:dt "Most scientific news and magazines"]
         [:dd "The signal to noise ratio is too low.  They can be misleading
            because observational studies are frequently reported as if they
            were experimental."]]]]]
     [(helper/make-feedback-form-component :en) submit]
     ;; iframe is a hack for working around the same origin policy.
     [:iframe
      {:name :iframe}]]))


(defroute #"/actionablescience(\.html)?" []
          (r/render [app]
                    (.getElementById js/document "app")))
