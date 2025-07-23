export const handler = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 50));

  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "86f5a010-2881-48e0-aa8a-492b74b0e1ff": {
          adcode: "ca-app-pub-3940256099942544/1712485313",
          pubid: "",
          passback: "1165eb0b-1266-4157-a524-b38e79890e5a",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "e59d3e48-4dea-4003-b61a-8fb54d852774",
          areaidx: "86f5a010-2881-48e0-aa8a-492b74b0e1ff",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "1165eb0b-1266-4157-a524-b38e79890e5a": {
          adcode: "ca-app-pub-3940256099942544/1712485313",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "0487afee-d781-4df6-8204-7235c663c361",
          areaidx: "1165eb0b-1266-4157-a524-b38e79890e5a",
          adweight: "100",
          adv_price: "0",
          order: "2",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
