// Ad Manager app open
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
        "aos-ng-gam-appopen": {
          adcode: "/6499/example/app-open",
          pubid: "",
          passback: "",
          adtype: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          advidx: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          areaidx: "aos-ng-gam-appopen",
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
