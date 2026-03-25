// Waterfall: A (TEST, always-fail) -> B (TEST, always-success)
// Tests: waterfall moves to next adapter on failure
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a0000001-0001-0001-0001-000000000001": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "a0000001-0001-0001-0001-000000000002",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a0000001-0001-0001-0001-000000000001",
          areaidx: "a0000001-0001-0001-0001-000000000001",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "a0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a0000001-0001-0001-0001-000000000002",
          areaidx: "a0000001-0001-0001-0001-000000000002",
          adweight: "100",
          adv_price: "1",
          order: "2",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
