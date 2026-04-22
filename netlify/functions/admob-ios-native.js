// AdMob iOS native (publisher 2626235926542867).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "d4e5f6a7-admb-4000-8000-iosnative0001": {
          adcode: "ca-app-pub-2626235926542867/8807129580",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "d4e5f6a7-admb-4000-8000-iosnative0001",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "0",
          height: "0",
        },
      },
    }),
  };
};
