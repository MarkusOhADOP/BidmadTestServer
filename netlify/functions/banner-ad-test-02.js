export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "3628d494-88f3-48e5-b8fc-1de5b260b7fb": {
          adcode: "128703",
          pubid: "544324",
          passback: "aa0b053d-e286-44a6-866d-f754bb7315ae",
          adtype: "b0745bea-6069-11eb-8e02-021baddf8c08",
          advidx: "018437ee-83d9-46f5-9d84-89d59ded1ed5",
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
