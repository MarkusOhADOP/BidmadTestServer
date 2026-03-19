export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      rolling: "0",
      ads: {
        "f6b0c3c4-304b-4fb7-abf3-cc40f045ed91": {
          adcode: {
            content:
              '<!DOCTYPE html>\n<html lang="ko">\n<head>\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n    <title>AdsByADOP</title>\n    <style>\n        * { padding:0; margin:0; border-style:none; }\n        a { text-decoration:none; color:#313534; }\n        .atom_ad_box { display:block; position:relative; width:100%; height:100%; margin:auto; background-color:#ffffff; }\n        .bn_box { width:300px; height:250px; overflow:hidden; z-index:2000; position:absolute; top:0; left:0; right:0; bottom:0; margin:auto; }\n        .atom-ad-img { width:300px; height:250px; }\n        .btn_logo { width:93px; height:15px; background-color:rgba(255,255,255,0.7); padding:0; margin:0; color:#313534; position:absolute; top:0; right:-78px; transition:right 0.3s; }\n        .btn_logo:hover { right:0; }\n        .btn_logo li { padding:0; margin:0; height:15px; line-height:15px; list-style:none; }\n        .btn_logo li span { display:inline-block; height:15px; line-height:15px; font-size:12px; font-family:Sans-Serif; vertical-align:middle; padding-left:2px; }\n        .btn_logo li span a { display:block; height:15px; line-height:15px; vertical-align:middle; }\n    </style>\n</head>\n<body style="padding:0; margin:0;">\n<div class="atom_ad_box">\n<div class="bn_box">\n    <ul class="btn_logo">\n        <li>\n            <img src="" width="15" height="15" alt="adop">\n            <span><a href="#" target="_blank">Ads by ADOP</a></span>\n        </li>\n    </ul>\n    <a href="https://www.jeomsin.co.kr" target="_blank">\n        <img class="atom-ad-img" src="https://direct-ad.s3.ap-northeast-2.amazonaws.com/creative/4/1.png" alt="\ubc15\uc2a4\ubc30\ub108 \ud14c\uc2a4\ud2b8">\n    </a>\n    </div>\n</div>\n</body>\n</html>\n',
            dataType: "html",
          },
          region: "8",
          pubid: "",
          passback: "",
          adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
          advidx: "f7677bb0-6be3-4b11-8444-6fb7da93da58",
          areaidx: "f6b0c3c4-304b-4fb7-abf3-cc40f045ed91",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
