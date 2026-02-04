// Waterfall Late Success Test 01: First adapter fails, fires late success after second succeeds
// Tests that late success from first adapter is ignored after waterfall completed
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "waterfall-late-fail-then-success": {
          adcode: "waterfall-late-fail-then-success",
          pubid: "",
          passback: "waterfall-late-immediate-success",
          adtype: "testtest-test-test-test-testtesttest", // TEST adapter
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de98",
          areaidx: "waterfall-late-success-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "waterfall-late-immediate-success": {
          adcode: "waterfall-late-immediate-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest", // TEST adapter
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de99",
          areaidx: "waterfall-late-success-test-01",
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
