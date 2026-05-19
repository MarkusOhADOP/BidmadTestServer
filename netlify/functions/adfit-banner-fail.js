// AdFit Banner failure — bad clientId should trigger adViewDidFailToReceiveAd → onLoadFailAd
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0006-4000-8000-adfitbadfail": {
          adcode: "DAN-INVALID-CLIENT-ID",
          pubid: "",
          passback: "",
          adtype: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          advidx: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          areaidx: "a1b2c3d4-0006-4000-8000-adfitbadfail",
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
