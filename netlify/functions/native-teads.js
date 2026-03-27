// Native: Teads
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-teads-001": {
          adcode: "124859",
          pubid: "",
          passback: "",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          areaidx: "native-teads-001",
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
