// ORTB Interstitial 320x480
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "interstitial",
      ads: {
        "a1b2c3d4-0010-4000-8000-ortbintst001": {
          adcode: "",
          pubid: "all",
          passback: "",
          adtype: "5ad10035-f252-11ef-b6ba-021407ef2d0b",
          advidx: "5ad10035-f252-11ef-b6ba-021407ef2d0b",
          areaidx: "a1b2c3d4-0010-4000-8000-ortbintst001",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "480",
        },
      },
    }),
  };
};
