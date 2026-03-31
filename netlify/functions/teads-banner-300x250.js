// Teads banner 300x250 — single Teads ad with valid placement ID
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "60",
      ads: {
        "teads-banner-300x250-area": {
          adcode: "127546",
          pubid: "",
          passback: "",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          areaidx: "teads-banner-300x250-area",
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
