// Rolling: [A, B] with 10s interval, both TEST always-success
// Tests: rolling cycles A -> B -> A on successive loads
// Size A=320x50, B=300x250 to distinguish which adapter loaded
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
        "d0000001-0001-0001-0001-000000000001": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "d0000001-0001-0001-0001-000000000002",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "d0000001-0001-0001-0001-000000000001",
          areaidx: "d0000001-0001-0001-0001-000000000001",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "d0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "d0000001-0001-0001-0001-000000000002",
          areaidx: "d0000001-0001-0001-0001-000000000002",
          adweight: "100",
          adv_price: "1",
          order: "2",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
