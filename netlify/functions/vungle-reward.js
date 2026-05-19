// Vungle (Liftoff) rewarded video.
// Falls back to Vungle's built-in test rewarded placement since the
// 6686a5c94d6765df32feb2b4 app didn't supply a rewarded placement.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "a1b2c3d4-0007-4000-8000-vunglreward01": {
          adcode: "65e97a61c8510816ad30c67a",
          pubid: "VUNGLE_TEST_REWARDED-1890208",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0007-4000-8000-vunglreward01",
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
