export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "size-test-collapsible": {
          adcode: "waterfall-stale-quick-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "size-test-collapsible",
          areaidx: "size-test-collapsible",
          adweight: 100,
          adv_price: "1",
          order: "1",
          width: "0",
          height: "50",
        },
      },
    }),
  };
};
