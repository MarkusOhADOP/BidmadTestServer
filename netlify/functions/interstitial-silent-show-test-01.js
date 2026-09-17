// Adapter never calls presented/failedToPresent -- reproduces the wedge state (loadStatus stuck .loaded with a nil loadedAdapter).
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
        "5efed557-e9b3-446f-a6f0-1647f2a4d5eb": {
          adcode: "interstitial-silent-show-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "5574ddf9-2009-4c4e-9057-aad45ff16daf",
          areaidx: "5efed557-e9b3-446f-a6f0-1647f2a4d5eb",
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
