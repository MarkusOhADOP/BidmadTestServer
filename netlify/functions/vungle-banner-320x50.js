// Vungle Banner 320x50
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0007-4000-8000-vungl320x050": {
          adcode: "65e97a61c8510816ad30c67a",
          pubid: "VUNGLE_TEST_BANNER_320X50-9610238",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0007-4000-8000-vungl320x050",
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
