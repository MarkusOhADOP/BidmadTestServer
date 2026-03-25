// Uses TEST adapter with adcode "vis-test-always-fail" → BidmadBannerTESTAdapter fails immediately.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "vis-test-always-fail": {
          adcode: "vis-test-always-fail",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de93",
          areaidx: "vis-test-always-fail",
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
