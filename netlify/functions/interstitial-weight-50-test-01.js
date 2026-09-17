// Single entry with adweight 50. Used to measure how often the ad weight lets a load reach the adapter.
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
        "b0f20b98-9094-4f5b-9141-58e5caa9647d": {
          adcode: "interstitial-weight-probe-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "9e71c45d-f17c-43c3-94bd-bff30554ce7c",
          areaidx: "b0f20b98-9094-4f5b-9141-58e5caa9647d",
          adweight: "50",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
