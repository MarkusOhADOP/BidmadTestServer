// Takes 2s to present. Used to check that a second show() issued while the first is still in flight never reaches the adapter.
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
        "4f67241e-a171-4ebb-805d-58dd9323094e": {
          adcode: "interstitial-slow-show-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "8f8ae349-a92b-4b2c-a815-a9dee22b3724",
          areaidx: "4f67241e-a171-4ebb-805d-58dd9323094e",
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
