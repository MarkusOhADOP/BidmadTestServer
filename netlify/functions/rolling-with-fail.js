// Rolling: 3 adapters — A (AdMob), B (TEST fail), C (AdMob)
// Tests: failed adapter still cycles, rolling state persists
// rolling=15s
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "15",
      ads: {
        "roll-fail-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "roll-fail-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-fail-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "roll-fail-ad-B": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "roll-fail-ad-C",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "roll-fail-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "320",
          height: "50",
        },
        "roll-fail-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-fail-area",
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
