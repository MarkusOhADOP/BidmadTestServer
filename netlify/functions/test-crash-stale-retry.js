// TEST adapter — crash demo for the "post-remove retry timer" bug.
// adcode `crash-on-stale-retry` routes to BidmadBannerTESTAdapter's
// crash demo scenario: first load defers failure 2s, second load fatalErrors.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "test-crash-stale-retry-area": {
          adcode: "crash-on-stale-retry",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "testtest-test-test-test-testtesttest",
          areaidx: "test-crash-stale-retry-area",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
