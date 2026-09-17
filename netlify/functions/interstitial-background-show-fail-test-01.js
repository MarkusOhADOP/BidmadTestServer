// Adapter reports its show failure from a background queue, so the show-fail callback exercises the SDK's main-queue hop.
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
        "9889b4a1-d996-470d-a7e8-74f7250369e2": {
          adcode: "interstitial-background-show-fail-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "f770d501-bad1-4042-865e-fb38d20037e5",
          areaidx: "9889b4a1-d996-470d-a7e8-74f7250369e2",
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
