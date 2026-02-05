// Rolling Behaviour Test RB-005: Single ad unit always returns A
// Waterfall: [A]
// 1st requestToLoad -> returns A, index=0
// 2nd requestToLoad -> returns A, index=0
// 3rd requestToLoad -> returns A, index=0
// All use Google AdMob test banner ad unit
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
        "rb-005-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-005-area",
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
