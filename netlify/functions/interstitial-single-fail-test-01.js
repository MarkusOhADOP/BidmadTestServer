// Single waterfall entry that fails to load. Used to check that the one adapter created for it is released.
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
        "075f7c01-3e59-4e7d-a1cd-3bb118ccb541": {
          adcode: "interstitial-load-fail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "24bfd09d-311f-4326-9aaa-6449d4f37526",
          areaidx: "075f7c01-3e59-4e7d-a1cd-3bb118ccb541",
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
