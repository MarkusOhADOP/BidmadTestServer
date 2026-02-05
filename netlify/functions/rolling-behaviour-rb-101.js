// Rolling Behaviour Test RB-101: First adapter fails, tries next
// Waterfall: [A, B, C]
// req(A) -> fail(A) -> Returns B, index=2
// A has invalid adcode (will fail), B succeeds with 300x250
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
        "rb-101-ad-A": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail",
          pubid: "",
          passback: "rb-101-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-101-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rb-101-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "rb-101-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-101-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "rb-101-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-101-area",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
