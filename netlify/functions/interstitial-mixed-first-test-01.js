// Scenario 7 leg 1: interstitial shown first. The test swaps testPath to reward-mixed-second-test-01 before show() so the auto-load preloads a reward ad.
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
        "8bbf6d99-333a-4144-bf71-311875e3ca22": {
          adcode: "interstitial-mixed-first-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "8531e557-1653-4f51-873a-983b80233c59",
          areaidx: "8bbf6d99-333a-4144-bf71-311875e3ca22",
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
