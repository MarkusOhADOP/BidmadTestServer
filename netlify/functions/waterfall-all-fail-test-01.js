// Waterfall All Fail Test 01: All adapters fail, then one fires late success
// Tests Guard 2: Late callback after waterfall exhaustion should be ignored
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "waterfall-all-fail-first": {
          adcode: "waterfall-all-fail-first",
          pubid: "",
          passback: "waterfall-all-fail-second",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea2",
          areaidx: "waterfall-all-fail-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "waterfall-all-fail-second": {
          adcode: "waterfall-all-fail-second",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea3",
          areaidx: "waterfall-all-fail-test-01",
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
