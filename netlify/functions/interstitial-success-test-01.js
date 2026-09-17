// Scenario 1/2: plain interstitial that loads successfully. Used to verify the SDK-initialization gate (succeeds when initialized, fails with uninitializedAdRequest when not).
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
        "43584c05-9bd7-4ae3-971c-89d95ce003f0": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "85a30ddb-5e97-415f-88d5-73f4376ed7c8",
          areaidx: "43584c05-9bd7-4ae3-971c-89d95ce003f0",
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
