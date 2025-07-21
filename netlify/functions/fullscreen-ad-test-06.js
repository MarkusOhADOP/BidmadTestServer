export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "86f5a010-2881-48e0-aa8a-492b74b0e1ff": {
          adcode: "/6499/example/rewarded",
          pubid: "",
          passback: "",
          adtype: "41350b05-4415-44b2-8e17-b5fe52d1bd6e",
          advidx: "e59d3e48-4dea-4003-b61a-8fb54d852774",
          areaidx: "86f5a010-2881-48e0-aa8a-492b74b0e1ff",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
