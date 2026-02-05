// Rolling Behaviour Test RB-107: Partial cycle then new request
// Waterfall: [A, B, C]
// req(A) -> fail(A) -> [new req] -> Returns B (continues from index)
// A has invalid adcode with NO passback (fails and stops)
// On refresh, index continues to B which succeeds
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
        "rb-107-ad-A": {
          adcode: "ca-app-pub-3940256099942544/invalid-will-fail",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-107-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rb-107-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-107-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "rb-107-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-107-area",
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
