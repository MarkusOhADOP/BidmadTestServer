// Ad Manager native
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
        "aos-ng-gam-native": {
          adcode: "/6499/example/native",
          pubid: "",
          passback: "",
          adtype: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          advidx: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          areaidx: "aos-ng-gam-native",
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
