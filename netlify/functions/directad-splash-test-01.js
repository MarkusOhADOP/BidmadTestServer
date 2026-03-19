// DirectAd Splash Test - Full-width HTML ad for splash container
// Same HTML/WKWebView pattern as banner but uses BidmadSplashDirectAdAdapter
// type: "splash" tells the SDK to parse as splash ad type
const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "splash",
  ads: {
    "da-splash-0001-0000-0000-000000000001": {
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
                background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
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
        <a href="https://www.google.com" target="_blank">
            <div class="splash_box">
                <div class="splash_title">Splash Ad</div>
                <div class="splash_sub">DirectAd Test - Tap to open</div>
            </div>
        </a>
    </body>
</html>`,
      pubid: "outlink",
      passback: "",
      adtype: "d1rect0d-d1re-ctad-d1re-ctadd1rectad",
      advidx: "da-splash-vidx-0000-000000000001",
      areaidx: "da-splash-0001-0000-0000-000000000001",
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
