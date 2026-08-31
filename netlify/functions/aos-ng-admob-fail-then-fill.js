// Waterfall: invalid AdMob unit fails -> valid AdMob unit fills (exercises NextGen onAdFailedToLoad -> next network)
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
        "aos-ng-wf-1": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "aos-ng-wf-2",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-wf-1",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "aos-ng-wf-2": {
          adcode: "ca-app-pub-3940256099942544/6300978111",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-wf-2",
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
