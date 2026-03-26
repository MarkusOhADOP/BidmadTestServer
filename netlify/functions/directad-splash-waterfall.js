// DirectAd Splash Test: Waterfall with TEST fail → DirectAd splash success
// Tests: Splash works within mediation waterfall
// Expected: TEST adapter fails → falls through to DirectAd → splash loads successfully
const directAdHtml = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body { width:320px; height:250px; }
        .box {
            width:320px; height:250px;
            background: linear-gradient(135deg, #f5af19 0%, #f12711 100%);
            display:flex; flex-direction:column;
            justify-content:center; align-items:center;
            font-family:-apple-system,sans-serif; color:#fff;
        }
        .title { font-size:22px; font-weight:700; margin-bottom:8px; }
        .sub { font-size:13px; opacity:0.85; }
    </style>
</head>
<body>
    <a href="https://www.google.com" target="_blank">
        <div class="box">
            <div class="title">Waterfall Winner</div>
            <div class="sub">DirectAd (after TEST fail)</div>
        </div>
    </a>
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
    "da-splash-wf-first": {
      adcode: "vis-test-always-fail",
      pubid: "",
      passback: "da-splash-wf-second",
      adtype: "testtest-test-test-test-testtesttest",
      advidx: "da-splash-wf-vidx-000000000001",
      areaidx: "da-splash-wf-first",
      adweight: "100",
      adv_price: "10",
      order: "1",
      width: "320",
      height: "250",
    },
    "da-splash-wf-second": {
      adcode: directAdHtml,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-wf-vidx-000000000002",
      areaidx: "da-splash-wf-second",
      adweight: "100",
      adv_price: "5",
      order: "2",
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
