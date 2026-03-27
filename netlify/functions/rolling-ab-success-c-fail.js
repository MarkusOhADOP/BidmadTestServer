// Rolling: A (AdMob) success → B (AdMob) success → C (TEST) fail
// Tests rolling where the last adapter fails
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
        "roll-absc-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "roll-absc-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-absc-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "roll-absc-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "roll-absc-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-absc-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "roll-absc-ad-C": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "roll-absc-area",
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
