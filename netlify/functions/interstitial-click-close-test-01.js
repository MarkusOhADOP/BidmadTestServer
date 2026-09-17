// Scenario 3: interstitial load -> show -> click -> close. Expects load, show, click, complete, close callbacks (complete is synthesised from close for interstitial).
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
        "2c3838a9-ff8a-483d-bdb8-5bcf104405e8": {
          adcode: "interstitial-click-close-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "2733ac36-0235-4ed6-a03e-2849753334a1",
          areaidx: "2c3838a9-ff8a-483d-bdb8-5bcf104405e8",
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
