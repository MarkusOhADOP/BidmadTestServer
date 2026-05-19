// ADOP Coupang banner 300x250 — adcode is appKey|subId|service|adFreeMinutes (4 parts → click triggers AdFree reward)
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
        "coupang-banner-300x250-area": {
          adcode: "460|adop1111|x|1",
          pubid: "",
          passback: "",
          adtype: "d34710de-0e82-11ee-bb90-026864a21938",
          advidx: "d34710de-0e82-11ee-bb90-026864a21938",
          areaidx: "coupang-banner-300x250-area",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
