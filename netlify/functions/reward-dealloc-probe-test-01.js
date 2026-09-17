// Scenario 9: two load/show/close cycles; the test holds weak refs to both adapter instances and asserts they deallocate. The adapter avoids retaining self past dismissal.
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
        "c31fc0ea-a072-46e5-93f2-647ab239787a": {
          adcode: "reward-dealloc-probe-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "f2b29e5e-0a36-4683-878d-b156a9269c37",
          areaidx: "c31fc0ea-a072-46e5-93f2-647ab239787a",
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
