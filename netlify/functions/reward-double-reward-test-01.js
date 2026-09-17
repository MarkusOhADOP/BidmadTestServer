// Adapter reports the reward twice for one ad. Checks whether the app is told it earned two rewards.
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
        "4356b3f5-7fbd-476c-930d-254499b43ffa": {
          adcode: "reward-double-reward-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a76656f0-6647-450a-afbd-b47248c83b30",
          areaidx: "4356b3f5-7fbd-476c-930d-254499b43ffa",
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
