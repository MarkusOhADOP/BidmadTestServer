// Scenario 6: two full show cycles from two different view controllers. Cycle 1 fires click/rewarded/close; cycle 2 fires click/click/skipped/close. The adapter distinguishes cycles with a static counter reset by resetTestState().
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
        "64ad22e4-9de4-4a8c-8f3e-60e857daeba6": {
          adcode: "reward-two-cycle-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "6a5bcdad-b349-4cbf-a129-6915096ccbc7",
          areaidx: "64ad22e4-9de4-4a8c-8f3e-60e857daeba6",
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
