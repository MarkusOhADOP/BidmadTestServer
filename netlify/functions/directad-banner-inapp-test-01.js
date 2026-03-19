// DirectAd Banner Test - In-app landing type
// pubid = "inapp" triggers BidmadDirectAdWebViewController instead of Safari
const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "banner",
  ads: {
    "da-banner-0002-0000-0000-000000000001": {
      adcode: `<!DOCTYPE html>
<html lang='ko'>
    <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <style>
            * { padding:0; margin:0; }
            a { text-decoration:none; color:#fff; line-height:0; }
            html, body {
                width: 320px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .ad_box {
                width: 320px;
                height: 50px;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: -apple-system, sans-serif;
                font-size: 14px;
                font-weight: 600;
                color: #fff;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>
        <a href="https://www.apple.com" target="_blank">
            <div class="ad_box">DirectAd In-App Landing</div>
        </a>
    </body>
</html>`,
      pubid: "inapp",
      passback: "",
      adtype: "d1rect0d-d1re-ctad-d1re-ctadd1rectad",
      advidx: "da-banner-vidx-0000-000000000002",
      areaidx: "da-banner-0002-0000-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "320",
      height: "50",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
