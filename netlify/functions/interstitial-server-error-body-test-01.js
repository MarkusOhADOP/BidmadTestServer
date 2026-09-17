// Compass reports an error in the body (command "error", status "500") while
// still carrying an ad. Used to check what the SDK does with the status and
// command fields, which it currently decodes but never inspects.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "error",
      isFBB: "N",
      status: "500",
      type: "interstitial",
      ads: {
        "6f2a1d04-9c3b-4e77-bd11-2a55c0e9f3aa": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "c1b7e5a2-40d8-4f6e-9a3c-7d2e8b4f1c60",
          areaidx: "6f2a1d04-9c3b-4e77-bd11-2a55c0e9f3aa",
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
