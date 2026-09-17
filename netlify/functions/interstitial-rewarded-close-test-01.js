// Interstitial adapter grants a reward and then dismisses. The OBH layer also synthesises a complete from the close, so this checks for a duplicated complete.
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
        "f8ba2e56-e64d-4fec-a485-ac56d8c880c6": {
          adcode: "interstitial-rewarded-close-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a08ef5ac-5a40-4902-b7fc-028af1d3ebcf",
          areaidx: "f8ba2e56-e64d-4fec-a485-ac56d8c880c6",
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
