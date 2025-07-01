const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "v",
  ads: {
    "d23c16bd-7650-4ac1-bce7-9af86b64e80d": {
      adcode: `<!DOCTYPE html>
<html lang='ko'>
    <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <title>AdsByRevive</title>
        <style>
            * { padding:0px; margin:0px; }
            a { text-decoration:none; color:#313534; line-height: 0; }
            html, body{
                width: 300px;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .ad_box{
                width:300px;
                height:250px;
                object-fit: cover;
            }
        </style>
    </head>
    <body>
        <a href="https://www.google.com" target="_blank" rel="noopener nofollow">
            <img class="ad_box" src="https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504820_960_720.jpg" width="300" height="250" />
        </a>
    </body>
</html>`,
      pubid: "_self",
      passback: "",
      adtype: "509daf26-4cbd-11f0-b6ba-021407ef2d0b",
      advidx: "f4c3e0f2-031f-4560-b6a6-6f66259c2975",
      areaidx: "d23c16bd-7650-4ac1-bce7-9af86b64e80d",
      adweight: "100",
      adv_price: "0",
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
