// Single entry with adweight 0. Used to measure how often the ad weight lets a load reach the adapter.
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
        "d85c6cde-8316-43ce-9082-562f53617b41": {
          adcode: "interstitial-weight-probe-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "0fc6ca04-1ce3-4ed4-981b-bca780d01598",
          areaidx: "d85c6cde-8316-43ce-9082-562f53617b41",
          adweight: "0",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
