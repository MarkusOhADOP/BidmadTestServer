// Vungle (Liftoff) App Open — uses VungleInterstitial under the hood with an
// 'App Open' placement, per Vungle's iOS integration docs.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "full",
      ads: {
        "a1b2c3d4-0007-4000-8000-vunglappopen1": {
          adcode: "65e97a61c8510816ad30c67a",
          pubid: "APP_OPEN_TEST-3656705",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0007-4000-8000-vunglappopen1",
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
