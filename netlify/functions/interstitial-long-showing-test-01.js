// Presents immediately and stays on screen for 5s. With auto-reload on, a second ad is preloaded while the first is still showing, so a test can ask whether show() is refused while an ad is already presented.
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
        "0cc6beae-17c8-472d-afff-98ad3ce47b8f": {
          adcode: "interstitial-long-showing-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "dabbb4a6-1604-4c91-b3e4-b244401b273e",
          areaidx: "0cc6beae-17c8-472d-afff-98ad3ce47b8f",
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
