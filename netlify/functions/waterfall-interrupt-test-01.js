// Waterfall Interrupt Test 01: Slow adapter that can be interrupted by new request
// Tests Guard 1: New request during ongoing waterfall should invalidate old attemptId
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "waterfall-interrupt-slow-adapter": {
          adcode: "waterfall-interrupt-slow-adapter",
          pubid: "",
          passback: "waterfall-interrupt-fallback",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea0",
          areaidx: "waterfall-interrupt-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "waterfall-interrupt-fallback": {
          adcode: "waterfall-interrupt-fallback",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea1",
          areaidx: "waterfall-interrupt-test-01",
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
