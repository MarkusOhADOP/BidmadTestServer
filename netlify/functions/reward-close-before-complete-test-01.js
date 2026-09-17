// Misordered reward: the adapter dismisses first and only then grants the reward. Checks the late complete still reaches the app rather than being dropped.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "052e990f-97f3-4cb1-af85-476a61c0c8eb": {
          adcode: "reward-close-before-complete-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "6d5c6260-d201-4713-9899-894d0be250a5",
          areaidx: "052e990f-97f3-4cb1-af85-476a61c0c8eb",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
