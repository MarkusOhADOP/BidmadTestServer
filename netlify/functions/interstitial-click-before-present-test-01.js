// Adapter reports a click before it reports the present. Checks whether a click can reach the app ahead of the show callback.
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
        "b8211556-af11-4c4c-804e-934424085901": {
          adcode: "interstitial-click-before-present-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "5e6a7054-112c-46df-baa4-539a8ef3a6f0",
          areaidx: "b8211556-af11-4c4c-804e-934424085901",
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
