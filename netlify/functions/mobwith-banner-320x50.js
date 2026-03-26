// MobWith Banner 320x50
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0007-4000-8000-mobwi320x050": {
          adcode: "jeomsin|10889200|",
          pubid: "",
          passback: "",
          adtype: "5becd78a-55f7-11ef-8e98-026864a21938",
          advidx: "5becd78a-55f7-11ef-8e98-026864a21938",
          areaidx: "a1b2c3d4-0007-4000-8000-mobwi320x050",
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
