export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "5176d8ce-54be-4c35-b092-d44b0f1b9a2d": {
          adcode: "4520003",
          pubid: "Banner_iOS",
          passback: "0390f4b7-c6b1-459c-b8fa-7b922048b769",
          adtype: "2e88609b-d916-11e9-9e1d-02c31b446301",
          advidx: "1bf9362d-ec4a-4303-b29c-2cd173068740",
          areaidx: "5176d8ce-54be-4c35-b092-d44b0f1b9a2d",
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
