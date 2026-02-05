// Rolling Behaviour Test 04: 3 AdMob banner ads for testing round-robin cycling
// First request returns A (index becomes 1)
// Second request returns B (index becomes 2)
// Third request returns C (index becomes 0, wraps around)
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
        "rolling-admob-test-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "rolling-admob-test-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rolling-admob-test-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rolling-admob-test-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "rolling-admob-test-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rolling-admob-test-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "320",
          height: "50",
        },
        "rolling-admob-test-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "rolling-admob-test-area",
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
