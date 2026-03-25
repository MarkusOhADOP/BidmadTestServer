// Rolling: [A, B] with 10s interval, both TEST always-fail
// Tests: rolling exhausts all adapters in current cycle, returns error
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "10",
      ads: {
        "e0000001-0001-0001-0001-000000000001": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "e0000001-0001-0001-0001-000000000002",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "e0000001-0001-0001-0001-000000000001",
          areaidx: "e0000001-0001-0001-0001-000000000001",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "e0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "e0000001-0001-0001-0001-000000000002",
          areaidx: "e0000001-0001-0001-0001-000000000002",
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
