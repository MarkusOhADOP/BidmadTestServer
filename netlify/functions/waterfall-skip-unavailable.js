// Waterfall: Adapter unavailable (fake UUID, no SDK) → skips to AdMob → succeeds
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "wf-skip-1": {
          adcode: "fake-app-id",
          pubid: "fake-placement",
          passback: "wf-skip-2",
          adtype: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
          advidx: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
          areaidx: "wf-skip-area",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "wf-skip-2": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "wf-skip-area",
          adweight: "100",
          adv_price: "5",
          order: "2",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
