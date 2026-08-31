// Waterfall: three invalid AdMob units -> full exhaustion, expect onLoadFailAd
// Android GMA NextGen (ads-mobile-sdk) E2E fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "aos-ng-af-1": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "aos-ng-af-2",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-af-1",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "aos-ng-af-2": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "aos-ng-af-3",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-af-2",
          adweight: "100",
          adv_price: "5",
          order: "2",
          width: "320",
          height: "50",
        },
        "aos-ng-af-3": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-af-3",
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
