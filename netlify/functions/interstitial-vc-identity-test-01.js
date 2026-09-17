// Records the view controller handed to showAd, so a test can confirm the adapter presents from the controller passed to show(on:) rather than any earlier one.
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
        "e827f473-e7f5-4ca4-a091-c6ea5a108831": {
          adcode: "interstitial-vc-identity-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "c16c5544-9a79-4288-8063-53dbe4818ab2",
          areaidx: "e827f473-e7f5-4ca4-a091-c6ea5a108831",
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
