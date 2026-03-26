// DirectAd Splash Test: Transparent background verification
// Tests: WKWebView has transparent background (clear, not opaque)
// Expected: Container's green background shows through transparent areas of the HTML
const html = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body {
            width:320px; height:250px;
            background: transparent;
        }
        .grid {
            display:grid; grid-template-columns:1fr 1fr;
            grid-template-rows:1fr 1fr; width:320px; height:250px;
        }
        .cell { display:flex; justify-content:center; align-items:center;
                font-family:-apple-system,sans-serif; font-size:13px; font-weight:600; }
        .solid1 { background:rgba(255,59,48,0.8); color:#fff; }
        .transparent1 { background:transparent; color:#333; }
        .transparent2 { background:transparent; color:#333; }
        .solid2 { background:rgba(0,122,255,0.8); color:#fff; }
    </style>
</head>
<body>
    <div class="grid">
        <div class="cell solid1">Solid Red</div>
        <div class="cell transparent1">Transparent<br>(container visible)</div>
        <div class="cell transparent2">Transparent<br>(container visible)</div>
        <div class="cell solid2">Solid Blue</div>
    </div>
<script>
(function(){
    function getMobileOS() {
        const ua = navigator.userAgent || '';
        if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
        if (navigator.maxTouchPoints > 0 && /macintosh/i.test(ua)) return "iOS";
        return undefined;
    }
    const os = getMobileOS();
    if(os === "iOS") {
        window.webkit.messageHandlers["onDirectAdReady"].postMessage("https://bidmad-test-server.netlify.app/.netlify/functions/directad-impression-tracker");
    }
})();
</script>
</body>
</html>`;

const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "splash",
  ads: {
    "da-splash-trans-000-000000000001": {
      adcode: html,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-trans-vidx-00000000001",
      areaidx: "da-splash-trans-000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "320",
      height: "250",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
