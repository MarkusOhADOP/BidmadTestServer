// Adapter fires clicked after dismissed -- post-teardown callback leak (iOS never clears loadedAdapter.delegate).
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
        "5db5e333-c7b1-474f-a581-99f4315c01e3": {
          adcode: "interstitial-late-callback-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "c4a155b6-7aef-4c8c-8e89-3f91eb402824",
          areaidx: "5db5e333-c7b1-474f-a581-99f4315c01e3",
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
