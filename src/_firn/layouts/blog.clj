(defn blog
  [{:keys [build-url title render partials] :as config}]
  (let [{:keys [head]} partials]
    [:html
     (head config)
     [:body
      [:main
       [:article.def-wrapper
        [:div.def-content
         [:h1 title]
         (render :sitemap {:start-at ["Updates"]
                           :depth 1
                           :sort-by :newest})
         [:hr]
         [:div.back-to-main
          [:p "Back to main index: "
           [:a {:href "https://peeragogylabs.github.io/PeeragogyORG/"} "PeeragogyORG"]]]
         ]]]]]))


