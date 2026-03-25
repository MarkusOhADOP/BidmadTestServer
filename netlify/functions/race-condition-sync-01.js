export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "race-condition-sync-01": {
          adcode: "race-condition-sync-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de92",
          areaidx: "race-condition-sync-01",
          adweight: "100",
          adv_price: "10",
          order: "12",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
