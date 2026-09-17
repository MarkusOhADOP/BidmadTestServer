// Scenario 5: reward load -> show -> click -> skipped -> close. Expects load, show, click, skip, close.
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
        "b5e2bd1a-61b4-4a62-b12d-d934fb8fe036": {
          adcode: "reward-click-skip-close-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "078eebb7-facd-43c3-bcee-eacdf61517ec",
          areaidx: "b5e2bd1a-61b4-4a62-b12d-d934fb8fe036",
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
