// Native: AdFit
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-adfit-001": {
          adcode: "DAN-I0LXkabteOvSFufO",
          pubid: "",
          passback: "",
          adtype: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          advidx: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          areaidx: "native-adfit-001",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "0",
          height: "0",
        },
      },
    }),
  };
};
