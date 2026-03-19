// DirectAd Splash Test - In-app landing type
// pubid = "inapp" triggers BidmadDirectAdWebViewController instead of Safari
const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "splash",
  ads: {
    "da-splash-0002-0000-0000-000000000001": {
      adcode: `<!DOCTYPE html>
<html lang='ko'>
    <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <style>
            * { padding:0; margin:0; }
            a { text-decoration:none; color:#fff; }
            html, body {
                width: 320px;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .splash_box {
                width: 320px;
                height: 250px;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: -apple-system, sans-serif;
                border-radius: 8px;
            }
            .splash_title {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            .splash_sub {
                font-size: 14px;
                font-weight: 400;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <a href="https://www.apple.com" target="_blank">
            <div class="splash_box">
                <div class="splash_title">Splash In-App</div>
                <div class="splash_sub">Tap to open in-app browser</div>
            </div>
        </a>
    </body>
</html>`,
      pubid: "inapp",
      passback: "",
      adtype: "d1rect0d-d1re-ctad-d1re-ctadd1rectad",
      advidx: "da-splash-vidx-0000-000000000002",
      areaidx: "da-splash-0002-0000-0000-000000000001",
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
