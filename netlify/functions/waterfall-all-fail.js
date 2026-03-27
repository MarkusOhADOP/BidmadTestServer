// Waterfall: All 3 adapters fail → onLoadFailAd (code=111)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "wf-allfail-1": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "wf-allfail-2",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "wf-allfail-area",
          adweight: "100",
          adv_price: "30",
          order: "1",
          width: "320",
          height: "50",
        },
        "wf-allfail-2": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "wf-allfail-3",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "wf-allfail-area",
          adweight: "100",
          adv_price: "20",
          order: "2",
          width: "320",
          height: "50",
        },
        "wf-allfail-3": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "wf-allfail-area",
          adweight: "100",
          adv_price: "10",
          order: "3",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
