// Waterfall: A (TEST, always-fail) -> B (TEST, always-fail)
// Tests: waterfall exhausts all adapters, returns error code 111
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "c0000001-0001-0001-0001-000000000001": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "c0000001-0001-0001-0001-000000000002",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "c0000001-0001-0001-0001-000000000001",
          areaidx: "c0000001-0001-0001-0001-000000000001",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "c0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "c0000001-0001-0001-0001-000000000002",
          areaidx: "c0000001-0001-0001-0001-000000000002",
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
