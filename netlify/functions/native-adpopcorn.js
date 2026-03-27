// Native: AdPopcorn
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-adpopcorn-001": {
          adcode: "658966615|NiHhvkXvalBufq9||N256497692",
          pubid: "",
          passback: "",
          adtype: "ccde2ee6-1e2d-11ef-8e98-026864a21938",
          advidx: "ccde2ee6-1e2d-11ef-8e98-026864a21938",
          areaidx: "native-adpopcorn-001",
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
