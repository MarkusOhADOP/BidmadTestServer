// Rolling Behaviour Test RB-004: Fourth request wraps around to A
// Waterfall: [A, B, C]
// 1st requestToLoad -> returns A, index=1
// 2nd requestToLoad -> returns B, index=2
// 3rd requestToLoad -> returns C, index=0 (wrap)
// 4th requestToLoad -> returns A again, index=1
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
        "rb-004-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "rb-004-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-004-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rb-004-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "rb-004-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-004-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "320",
          height: "50",
        },
        "rb-004-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rb-004-area",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
