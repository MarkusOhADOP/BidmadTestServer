// Native: Pangle
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-pangle-001": {
          adcode: "8057427",
          pubid: "980208410",
          passback: "",
          adtype: "640ab9f2-d8b8-11eb-8e02-021baddf8c08",
          advidx: "640ab9f2-d8b8-11eb-8e02-021baddf8c08",
          areaidx: "native-pangle-001",
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
