// Adapter fails to present and then dismisses anyway. Checks whether a close (and, for interstitial, a synthesised complete) is delivered for an ad that never appeared.
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
        "b54a70a2-6604-4de5-b220-8ac7cb3591d6": {
          adcode: "interstitial-close-without-show-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "d1f71134-818d-465e-a78e-85346f737c03",
          areaidx: "b54a70a2-6604-4de5-b220-8ac7cb3591d6",
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
