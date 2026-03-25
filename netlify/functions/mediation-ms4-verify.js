// ms4 verification: 3 ads with different attributes
// Tests: all ads parsed correctly with correct fields, rolling parsed
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "30",
      ads: {
        "f0000001-0001-0001-0001-000000000001": {
          adcode: "vis-test-always-success",
          pubid: "pub-id-alpha",
          passback: "f0000001-0001-0001-0001-000000000002",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "f0000001-0001-0001-0001-000000000001",
          areaidx: "f0000001-0001-0001-0001-000000000001",
          adweight: "80",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "f0000001-0001-0001-0001-000000000002": {
          adcode: "vis-test-always-success",
          pubid: "pub-id-beta",
          passback: "f0000001-0001-0001-0001-000000000003",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "f0000001-0001-0001-0001-000000000002",
          areaidx: "f0000001-0001-0001-0001-000000000002",
          adweight: "50",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "f0000001-0001-0001-0001-000000000003": {
          adcode: "vis-test-always-success",
          pubid: "pub-id-gamma",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "f0000001-0001-0001-0001-000000000003",
          areaidx: "f0000001-0001-0001-0001-000000000003",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
