export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "898b5c62-13b7-4004-9847-fc084559051b": {
          adcode: "click-callback-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de91",
          areaidx: "898b5c62-13b7-4004-9847-fc084559051b",
          adweight: "100",
          adv_price: "10",
          order: "12",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
