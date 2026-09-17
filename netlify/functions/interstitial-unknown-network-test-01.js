// First entry carries an adtype UUID the SDK does not know, so adNetworkName is nil and the entry fails before any adapter exists. The waterfall must advance to the TEST entry behind it.
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
        "1bec4702-121b-4146-a679-fe7ed6c0a4dd": {
          adcode: "whatever-the-server-sent",
          pubid: "",
          passback: "268130f3-1ba7-4f5e-b6ab-48e22479ac06",
          adtype: "00000000-0000-0000-0000-000000000000",
          advidx: "a19f475e-18d6-4ebe-a16e-076600a60520",
          areaidx: "1bec4702-121b-4146-a679-fe7ed6c0a4dd",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "268130f3-1ba7-4f5e-b6ab-48e22479ac06": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "81941a7c-897d-4c43-80f8-4be115d081a7",
          areaidx: "268130f3-1ba7-4f5e-b6ab-48e22479ac06",
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
