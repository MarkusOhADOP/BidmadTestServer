// AdMob native advanced
// Android GMA NextGen (ads-mobile-sdk) E2E fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "aos-ng-admob-native": {
          adcode: "ca-app-pub-3940256099942544/2247696110",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-admob-native",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "0",
          height: "0",
        },
      },
    }),
  };
};
