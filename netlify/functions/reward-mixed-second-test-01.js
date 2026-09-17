// Scenario 7 leg 2: reward ad preloaded by the auto-load that follows the interstitial show. Fires presented -> rewarded -> dismissed.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "812951d6-7fa6-40b7-90a8-065e2d62d947": {
          adcode: "reward-mixed-second-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "e12128e9-15c4-4690-9a8e-213b4bcd4e83",
          areaidx: "812951d6-7fa6-40b7-90a8-065e2d62d947",
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
