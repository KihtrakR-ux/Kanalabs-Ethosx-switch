// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_629b4") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 336,
          height: 385,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "3",
          locale: "en",
          toolbar_bg: "#0000004D",
          enable_publishing: false,
          gridColor: "rgba(0, 0, 0, 0.3)",
          hide_top_toolbar: true,
          allow_symbol_change: true,
          studies: ["STD;Advance%1Decline%1Line"],
          container_id: "tradingview_629b4",
          backgrouncolor: "rgba(0, 0, 0, 0.3)",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_629b4" />
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}
