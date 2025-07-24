export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "3628d494-88f3-48e5-b8fc-1de5b260b7fb": {
          adcode: "10166",
          pubid: "102468",
          passback: "",
          adtype: "6b7647ea-b1c7-11ed-b4f4-026864a21938",
          advidx: "8bdcd184-e3e3-49c9-9a51-aa9f23e5ab95",
          areaidx: "3628d494-88f3-48e5-b8fc-1de5b260b7fb",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
