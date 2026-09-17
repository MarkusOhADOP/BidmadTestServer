// Every entry is weighted out, so the waterfall is exhausted without a single adapter being asked to load. Terminal outcome only; the ad weight semantics themselves are intended behaviour.
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
        "58432efc-eab4-499a-a9cf-ebcdfe67446f": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "0e7d6fb5-9e0f-41f8-8a4c-57ea12c95e30",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "43342a34-b997-4d63-94f6-d30c4b1605e7",
          areaidx: "58432efc-eab4-499a-a9cf-ebcdfe67446f",
          adweight: "0",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "0e7d6fb5-9e0f-41f8-8a4c-57ea12c95e30": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "0df7c7f3-703b-404e-a457-aa6e82471cd7",
          areaidx: "0e7d6fb5-9e0f-41f8-8a4c-57ea12c95e30",
          adweight: "0",
          adv_price: "0",
          order: "2",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
