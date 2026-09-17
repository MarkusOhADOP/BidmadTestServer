// Single entry with adweight 100. Used to measure how often the ad weight lets a load reach the adapter.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "interstitial",
      ads: {
        "7e769164-68eb-4df7-b945-dd6d36ce7f54": {
          adcode: "interstitial-weight-probe-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "3b9d6ff0-df22-44ca-b840-c55b2cf2eace",
          areaidx: "7e769164-68eb-4df7-b945-dd6d36ce7f54",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
