// Waterfall Middle Late Test 01: A fails → B fails → C succeeds, B fires late
// Tests Guard 2: Late callback from middle adapter should be ignored
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "waterfall-middle-first": {
          adcode: "waterfall-middle-first",
          pubid: "",
          passback: "waterfall-middle-second",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea5",
          areaidx: "waterfall-middle-late-test-01",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "waterfall-middle-second": {
          adcode: "waterfall-middle-second",
          pubid: "",
          passback: "waterfall-middle-third",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea6",
          areaidx: "waterfall-middle-late-test-01",
          adweight: "100",
          adv_price: "5",
          order: "2",
          width: "320",
          height: "50",
        },
        "waterfall-middle-third": {
          adcode: "waterfall-middle-third",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6dea7",
          areaidx: "waterfall-middle-late-test-01",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
