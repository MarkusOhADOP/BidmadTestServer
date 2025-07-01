const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "v",
  ads: {
    "d23c16bd-7650-4ac1-bce7-9af86b64e80d": {
      adcode: ``,
      pubid: "_self",
      passback: "",
      adtype: "509daf26-4cbd-11f0-b6ba-021407ef2d0b",
      advidx: "f4c3e0f2-031f-4560-b6a6-6f66259c2975",
      areaidx: "d23c16bd-7650-4ac1-bce7-9af86b64e80d",
      adweight: "100",
      adv_price: "0",
      order: "1",
      width: "320",
      height: "480",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
