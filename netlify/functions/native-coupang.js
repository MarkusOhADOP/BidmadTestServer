// Native: ADOP Coupang
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-coupang-001": {
          adcode: "",
          pubid: "",
          passback: "",
          adtype: "d34710de-0e82-11ee-bb90-026864a21938",
          advidx: "d34710de-0e82-11ee-bb90-026864a21938",
          areaidx: "native-coupang-001",
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
