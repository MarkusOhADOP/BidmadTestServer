// Rolling: 3 AdMob adapters with different sizes, rolling=15s
// 1st load → A (320x50), 2nd → B (300x250), 3rd → C (320x100), 4th → A (wrap)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "15",
      ads: {
        "roll-3-ad-A": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "roll-3-ad-B",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-3-area",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "roll-3-ad-B": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "roll-3-ad-C",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-3-area",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "300",
          height: "250",
        },
        "roll-3-ad-C": {
          adcode: "ca-app-pub-3940256099942544/2435281174",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "roll-3-area",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
