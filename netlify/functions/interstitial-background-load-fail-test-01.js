// Adapter reports its load failure from a background queue, so the load-fail callback exercises the SDK's main-queue hop.
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
        "70993ed3-d46e-4782-a67b-9aa0541e3d7b": {
          adcode: "interstitial-background-load-fail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "19dceaa3-5f00-4dd0-931b-f51b5439bf28",
          areaidx: "70993ed3-d46e-4782-a67b-9aa0541e3d7b",
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
