// Adapter fires every show-side callback from a background queue. The SDK is responsible for hopping them to the main queue before they reach the app.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "4c965c26-81c6-4a1e-9e51-3db1e0fbfb2a": {
          adcode: "reward-background-callbacks-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "b1e1bd74-fbf7-46ba-852d-21b15332d133",
          areaidx: "4c965c26-81c6-4a1e-9e51-3db1e0fbfb2a",
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
