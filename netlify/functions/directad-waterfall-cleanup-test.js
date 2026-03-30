export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "cleanup-test-area-01": {
          adcode: "",
          pubid: "",
          passback: "",
          adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
          advidx: "cleanup-test-directad-fail",
          areaidx: "cleanup-test-area-01",
          adweight: "100",
          adv_price: "2",
          order: "1",
          width: "320",
          height: "50",
        },
        "cleanup-test-area-02": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "cleanup-test-test-success",
          areaidx: "cleanup-test-area-02",
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
