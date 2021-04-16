(defn default
  [{:keys [render partials title build-url]}]
  (let [{:keys [head]} partials]
    [:html
     (head build-url)
     [:body
      [:main
       [:article.content
        ;; [:div (render :toc)] ;; Optional; add a table of contents
        [:h1 title]
        (render :adjacent-files)

        [:div (render :file)]
        ;; if backlinks exist, store them in a let bindings.
        (when-let [backlinks (render :backlinks)]
          [:div
           [:hr]
           [:div.backlinks
            [:h4 "Backlinks to this document:"]
            backlinks]])]]]]))
