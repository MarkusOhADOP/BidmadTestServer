// Vungle (Liftoff) interstitial
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "full",
      ads: {
        "a1b2c3d4-0007-4000-8000-vunglinter001": {
          adcode: "6686a5c94d6765df32feb2b4",
          pubid: "NEW_IOS_INT_1-0192131",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0007-4000-8000-vunglinter001",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "1",
          height: "1",
        },
      },
    }),
  };
};
