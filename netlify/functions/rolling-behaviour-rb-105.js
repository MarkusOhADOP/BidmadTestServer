// Rolling Behaviour Test RB-105: Single adapter fails
// Waterfall: [A]
// req(A) -> fail(A) -> Returns nil, noShow(A) event
// A has invalid adcode (will fail)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "10",
      ads: {
        "rb-105-ad-A": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-105-area",
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
