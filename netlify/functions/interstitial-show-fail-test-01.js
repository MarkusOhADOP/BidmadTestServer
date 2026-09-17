// A loaded ad that refuses to present: showAd reports failedToPresent without ever presenting. Used to check that a show failure is reported without silently reloading, and that load/show can be retried afterwards.
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
        "eb0f4183-8243-499d-8b41-d46970e4062c": {
          adcode: "interstitial-show-fail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "d778dbee-5d05-4c54-8930-697b45002b25",
          areaidx: "eb0f4183-8243-499d-8b41-d46970e4062c",
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
