// DirectAd Splash Test: HTML that triggers onDirectAdFail via broken image
// Tests: onLoadFailAd fires on WKWebView JS error callback
// Expected: JS fires onDirectAdFail → adapter error code -2
const html = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body { width:320px; height:250px; }
    </style>
</head>
<body>
    <img id="ad_img" src="https://invalid-domain-that-does-not-exist.test/broken.jpg" alt="">
<script>
(function(){
    const iOSOSType = "iOS";
    function getMobileOS() {
        const ua = navigator.userAgent || '';
        if (/iPhone|iPad|iPod/i.test(ua)) return iOSOSType;
        if (navigator.maxTouchPoints > 0 && /macintosh/i.test(ua)) return iOSOSType;
        return undefined;
    }
    function onReady(){
        const os = getMobileOS();
        if(os === iOSOSType) {
            window.webkit.messageHandlers["onDirectAdReady"].postMessage("https://bidmad-test-server.netlify.app/.netlify/functions/directad-impression-tracker");
        }
    }
    function onError(event){
        var img = document.getElementById('ad_img');
        var os = getMobileOS();
        if(os === iOSOSType) {
            window.webkit.messageHandlers["onDirectAdFail"].postMessage("Image load failed (broken src)");
        }
    }
    var img = document.getElementById('ad_img');
    if (img.complete) {
        if (img.naturalWidth > 0) { onReady(); } else { onError(null); }
    } else {
        img.addEventListener('load', onReady);
        img.addEventListener('error', function(e){ onError(e); });
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
    "da-splash-jsfail-000-000000000001": {
      adcode: html,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-jsfail-vidx-00000000001",
      areaidx: "da-splash-jsfail-000-000000000001",
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
