// AdMob Banner 320x100
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0001-4000-8000-admob320x100": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "a1b2c3d4-0001-4000-8000-admob320x100",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
