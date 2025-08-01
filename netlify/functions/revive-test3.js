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
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
    </head>
    <body>
        <a href="https://www.naver.com" target="_blank" rel="noopener nofollow">
            <img src="https://cdn.pixabay.com/photo/2025/04/16/06/25/duck-9536937_960_720.jpg" width="320px" height="480px" />
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
      width: "320",
      height: "480",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
