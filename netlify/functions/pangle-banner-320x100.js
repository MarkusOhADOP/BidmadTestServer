// Pangle Banner 320x100
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0005-4000-8000-pangl320x100": {
          adcode: "8025677",
          pubid: "980099802",
          passback: "",
          adtype: "640ab9f2-d8b8-11eb-8e02-021baddf8c08",
          advidx: "640ab9f2-d8b8-11eb-8e02-021baddf8c08",
          areaidx: "a1b2c3d4-0005-4000-8000-pangl320x100",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
