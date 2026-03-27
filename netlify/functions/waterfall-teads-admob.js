// Waterfall: Teads fails (no SDK/invalid) → AdMob succeeds
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "wf-teads-admob-1": {
          adcode: "INVALID_PID",
          pubid: "INVALID_PLACEMENT",
          passback: "wf-teads-admob-2",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          areaidx: "wf-teads-admob-area",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "wf-teads-admob-2": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "wf-teads-admob-area",
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
