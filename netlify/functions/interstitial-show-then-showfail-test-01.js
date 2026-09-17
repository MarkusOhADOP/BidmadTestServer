// Presents successfully, then reports a show failure afterwards (an ad that fails while closing). Used to check that the ad auto-loaded off the successful present is still showable.
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
        "7e437097-497c-4c0d-acd2-9d86cd742752": {
          adcode: "interstitial-show-then-showfail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "6794d9a2-27b0-41be-aeac-47722766d69b",
          areaidx: "7e437097-497c-4c0d-acd2-9d86cd742752",
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
