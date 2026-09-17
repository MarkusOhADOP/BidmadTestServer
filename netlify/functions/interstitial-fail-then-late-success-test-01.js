// Misbehaving first entry calls its load completion handler twice: a failure, then a success 1s later. The waterfall should advance on the failure and ignore the late success entirely.
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
        "880b5a6d-95a9-4794-8010-bd7a3b159491": {
          adcode: "interstitial-fail-then-late-success-test-01",
          pubid: "",
          passback: "026abd34-a99e-4ca7-aeb0-8fb6b544e8ad",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "cabc24d3-0f3f-4d29-bef0-f9e9fcd9fe1a",
          areaidx: "880b5a6d-95a9-4794-8010-bd7a3b159491",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "026abd34-a99e-4ca7-aeb0-8fb6b544e8ad": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a8518184-9b81-4e75-b5ca-ecf71012b4e8",
          areaidx: "026abd34-a99e-4ca7-aeb0-8fb6b544e8ad",
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
