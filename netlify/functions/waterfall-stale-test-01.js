// Waterfall Stale Test 01: First adapter fails slowly, second succeeds
// Tests that late callbacks from first adapter are ignored after waterfall moved to second
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "waterfall-stale-slow-fail": {
          adcode: "waterfall-stale-slow-fail",
          pubid: "",
          passback: "waterfall-stale-quick-success",
          adtype: "testtest-test-test-test-testtesttest", // TEST adapter
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de96",
          areaidx: "waterfall-stale-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "waterfall-stale-quick-success": {
          adcode: "waterfall-stale-quick-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest", // TEST adapter
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de97",
          areaidx: "waterfall-stale-test-01",
          adweight: "100",
          adv_price: "5",
          order: "2",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
