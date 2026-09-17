// Adapter grants the reward and never dismisses. The complete must reach the app on its own, without waiting on a close that never comes.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "9fe5b064-719f-45d7-86ed-203e4bfe5c37": {
          adcode: "reward-complete-without-close-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "fb48db3b-4069-4ab7-813e-13ae99bffc5a",
          areaidx: "9fe5b064-719f-45d7-86ed-203e4bfe5c37",
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
