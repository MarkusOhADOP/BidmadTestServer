// DirectAd Banner Test: HTML that never calls onDirectAdReady or onDirectAdFail
// Tests: JS bridge timeout fires after 5 seconds
// Expected: No JS callback → timeout → loadFail with "JS bridge timeout (5.0s)"
const html = `<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>
        * { padding:0; margin:0; }
        html, body { width:300px; height:250px; }
        .box {
            width:300px; height:250px;
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            display:flex; flex-direction:column;
            justify-content:center; align-items:center;
            font-family:-apple-system,sans-serif; color:#fff;
        }
        .title { font-size:20px; font-weight:700; margin-bottom:8px; }
        .sub { font-size:13px; opacity:0.7; }
        .timer { font-size:24px; font-weight:700; margin-top:12px; font-variant-numeric:tabular-nums; }
    </style>
</head>
<body>
    <div class="box">
        <div class="title">Banner Timeout Test</div>
        <div class="sub">No JS bridge call — waiting for timeout...</div>
        <div class="timer" id="timer">0s</div>
    </div>
<script>
// Intentionally does NOT call onDirectAdReady or onDirectAdFail
var seconds = 0;
setInterval(function() {
    seconds++;
    document.getElementById('timer').textContent = seconds + 's';
}, 1000);
</script>
</body>
</html>`;

const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "banner",
  ads: {
    "da-banner-nocb-0000-000000000001": {
      adcode: html,
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-banner-nocb-vidx-000000000001",
      areaidx: "da-banner-nocb-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "300",
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
