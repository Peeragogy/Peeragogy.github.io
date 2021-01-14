(defn update
  [{:keys [render partials title meta date-created build-url]}]
  (let [{:keys [head]} partials]
    [:html
     (head build-url)
     [:body
      [:main
       [:article.content
        ;; [:div (render :toc)] ;; Optional; add a table of contents
        [:h1 title]
        [:i (str date-created " — " (-> meta :keywords :author))]
        [:div (render :file)]
        ;; if backlinks exist, store them in a let bindings.
        (when-let [backlinks (render :backlinks)] 
          [:div
           [:hr]
           [:div.backlinks
            [:h4 "Backlinks to this document:"]
            backlinks]])
        [:hr]
        [:div.back [:p "Back to blog: " [:a {:href "https://peeragogylabs.github.io/PeeragogyORG/updates.html"} "PeeragogyOrg: Updates"]]]]]]]))
