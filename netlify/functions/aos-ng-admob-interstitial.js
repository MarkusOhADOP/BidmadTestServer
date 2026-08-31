// AdMob interstitial
// Android GMA NextGen (ads-mobile-sdk) E2E fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "full",
      ads: {
        "aos-ng-admob-interstitial": {
          adcode: "ca-app-pub-3940256099942544/1033173712",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-admob-interstitial",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "1",
          height: "1",
        },
      },
    }),
  };
};
