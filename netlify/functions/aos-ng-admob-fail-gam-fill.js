// Waterfall: invalid AdMob fails -> Ad Manager fills (cross-adapter handoff inside AdmobNextGenAdapter)
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
        "aos-ng-mx-1": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "aos-ng-mx-2",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "aos-ng-mx-1",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
        "aos-ng-mx-2": {
          adcode: "/6499/example/banner",
          pubid: "",
          passback: "",
          adtype: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          advidx: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          areaidx: "aos-ng-mx-2",
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
