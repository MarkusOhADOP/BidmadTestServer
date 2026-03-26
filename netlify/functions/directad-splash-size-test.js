// DirectAd Splash Test: Non-standard size (200x400)
// Tests: Splash renders at correct size from Compass width/height fields
// Expected: WKWebView frame matches 200x400, ad view renders at that size
const html = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body { width:200px; height:400px; }
        .box {
            width:200px; height:400px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display:flex; flex-direction:column;
            justify-content:center; align-items:center;
            font-family:-apple-system,sans-serif; color:#fff;
        }
        .title { font-size:20px; font-weight:700; margin-bottom:8px; }
        .size { font-size:14px; opacity:0.8; }
    </style>
</head>
<body>
    <div class="box">
        <div class="title">Size Test</div>
        <div class="size">200 x 400</div>
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
    "da-splash-size-0000-000000000001": {
      adcode: html,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-size-vidx-000000000001",
      areaidx: "da-splash-size-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "200",
      height: "400",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
