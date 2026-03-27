// Vungle Banner 300x250 (MREC)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0007-4000-8000-vungl300x250": {
          adcode: "65b10e27b1868948d4c0a251",
          pubid: "MREC_300x250-6215498",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0007-4000-8000-vungl300x250",
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
