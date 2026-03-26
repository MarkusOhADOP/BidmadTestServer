// DirectAd Splash Test: Overflow content to verify scroll is disabled
// Tests: WKWebView scroll is disabled (scrollView.isScrollEnabled = false)
// Expected: Content overflows but user cannot scroll — only top portion visible
const html = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body { width:320px; height:250px; overflow:hidden; }
        .container { width:320px; height:800px; }
        .section {
            width:320px; height:200px;
            display:flex; justify-content:center; align-items:center;
            font-family:-apple-system,sans-serif; color:#fff;
            font-size:18px; font-weight:700;
        }
        .s1 { background:#34c759; }
        .s2 { background:#ff9500; }
        .s3 { background:#ff3b30; }
        .s4 { background:#5856d6; }
        .indicator {
            position:fixed; bottom:8px; right:8px;
            background:rgba(0,0,0,0.7); color:#fff; padding:4px 8px;
            border-radius:4px; font-size:11px; font-family:-apple-system,sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="section s1">VISIBLE (scroll disabled)</div>
        <div class="section s2">HIDDEN if scroll disabled</div>
        <div class="section s3">HIDDEN if scroll disabled</div>
        <div class="section s4">HIDDEN if scroll disabled</div>
    </div>
    <div class="indicator">800px content in 250px frame</div>
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
    "da-splash-scroll-00-000000000001": {
      adcode: html,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-scroll-vidx-0000000001",
      areaidx: "da-splash-scroll-00-000000000001",
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
