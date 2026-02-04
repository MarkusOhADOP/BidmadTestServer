// Rapid Requests Test 01: Single slow adapter for testing rapid successive requests
// Tests Guard 1: Only the latest request's callbacks should be processed
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "rapid-requests-slow-adapter": {
          adcode: "rapid-requests-slow-adapter",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea4",
          areaidx: "rapid-requests-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
