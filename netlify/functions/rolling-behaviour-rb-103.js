// Rolling Behaviour Test RB-103: All adapters fail (full cycle)
// Waterfall: [A, B, C]
// req(A) -> fail(A) -> fail(B) -> fail(C) -> Returns nil, noShow event
// All have invalid adcode (will fail)
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
        "rb-103-ad-A": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail-A",
          pubid: "",
          passback: "rb-103-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-103-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rb-103-ad-B": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail-B",
          pubid: "",
          passback: "rb-103-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-103-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "rb-103-ad-C": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail-C",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-103-area",
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
