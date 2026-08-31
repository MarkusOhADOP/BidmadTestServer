// Ad Manager rewarded
// Android GMA NextGen (ads-mobile-sdk) E2E fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "aos-ng-gam-reward": {
          adcode: "/6499/example/rewarded",
          pubid: "",
          passback: "",
          adtype: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          advidx: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          areaidx: "aos-ng-gam-reward",
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
