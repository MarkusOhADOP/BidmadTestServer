// Scenario 4: reward load -> show -> click -> complete (rewarded) -> close. Expects load, show, click, complete, close.
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
        "dbaaa14c-8937-4ee2-a280-a4f1f2429a48": {
          adcode: "reward-click-complete-close-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "e2794a4d-8585-4efb-bd7d-7c0e044f2f46",
          areaidx: "dbaaa14c-8937-4ee2-a280-a4f1f2429a48",
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
