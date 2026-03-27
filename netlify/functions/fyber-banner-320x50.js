// Fyber Banner 320x50
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0006-4000-8000-fyber320x050": {
          adcode: "130569",
          pubid: "443080",
          passback: "",
          adtype: "b0745bea-6069-11eb-8e02-021baddf8c08",
          advidx: "b0745bea-6069-11eb-8e02-021baddf8c08",
          areaidx: "a1b2c3d4-0006-4000-8000-fyber320x050",
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
