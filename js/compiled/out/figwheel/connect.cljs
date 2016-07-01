(ns figwheel.connect (:require [figwheel.client] [chokuben.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/chokuben.core.on-js-reload (apply js/chokuben.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'chokuben.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

