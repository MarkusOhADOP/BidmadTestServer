// Scenario 8: two-entry waterfall, both entries fail to load. Expects req/nofill x2 then a noshow log, then a showFail with nil info when show() is called.
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
        "d79a78fc-67cf-4075-8b43-6b2d3fecbc1d": {
          adcode: "interstitial-load-fail-test-01",
          pubid: "",
          passback: "88e306ff-d80c-4f1e-977b-43c731ba2416",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "d9d861e1-b7ab-4979-b483-a7c8eeeebf5e",
          areaidx: "d79a78fc-67cf-4075-8b43-6b2d3fecbc1d",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "88e306ff-d80c-4f1e-977b-43c731ba2416": {
          adcode: "interstitial-load-fail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "7eec1227-4088-4587-a090-0e9f3135a805",
          areaidx: "88e306ff-d80c-4f1e-977b-43c731ba2416",
          adweight: "100",
          adv_price: "0",
          order: "2",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
