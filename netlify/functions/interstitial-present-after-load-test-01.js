// Adapter reports presented shortly after its load succeeds, without show() ever being called. Checks whether an impression is logged for an ad that was never displayed.
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
        "3c68c128-3df2-4a4b-ad81-a5e69868d978": {
          adcode: "interstitial-present-after-load-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "04df0130-e8ea-4b6a-b0aa-cde3976e0861",
          areaidx: "3c68c128-3df2-4a4b-ad81-a5e69868d978",
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
