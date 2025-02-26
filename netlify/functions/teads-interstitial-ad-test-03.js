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
          adcode: "84242",
          pubid: "",
          passback: "5d7f0a60-22b0-4ef8-b2d0-0abeb8976940",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "8bdcd184-e3e3-49c9-9a51-aa9f23e5ab95",
          areaidx: "3628d494-88f3-48e5-b8fc-1de5b260b7fb",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
