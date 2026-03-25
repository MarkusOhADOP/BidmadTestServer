// Waterfall: A (fake UUID, adapter not found) -> B (TEST, always-success)
// Tests: waterfall skips unavailable adapter and tries next
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "b0000001-0001-0001-0001-000000000001": {
          adcode: "doesnt-matter",
          pubid: "",
          passback: "b0000001-0001-0001-0001-000000000002",
          adtype: "ffffffff-ffff-ffff-ffff-ffffffffffff",
          advidx: "b0000001-0001-0001-0001-000000000001",
          areaidx: "b0000001-0001-0001-0001-000000000001",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "b0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "b0000001-0001-0001-0001-000000000002",
          areaidx: "b0000001-0001-0001-0001-000000000002",
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
