// ADOP Coupang banner failure — adcode "bad" is a single token, fails the adapter's `parameters.count >= 2` check → paramError → onLoadFailAd
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "60",
      ads: {
        "coupang-banner-fail-area": {
          adcode: "bad",
          pubid: "",
          passback: "",
          adtype: "d34710de-0e82-11ee-bb90-026864a21938",
          advidx: "d34710de-0e82-11ee-bb90-026864a21938",
          areaidx: "coupang-banner-fail-area",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
