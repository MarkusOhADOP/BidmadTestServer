// Adapter fires presented twice -- reproduces duplicate onShowAd and duplicate auto-reload (showCompletionHandler is never cleared).
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
        "8016a05f-e73d-4cc5-ac39-81783c886fd1": {
          adcode: "interstitial-double-present-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "88b19cb5-805d-4bca-ac2a-e275482c5548",
          areaidx: "8016a05f-e73d-4cc5-ac39-81783c886fd1",
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
