// AdMob iOS 320x50 banner (publisher 2626235926542867).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "d1e2f3a4-admb-4000-8000-iosbanner320": {
          adcode: "ca-app-pub-2626235926542867/1512889460",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "d1e2f3a4-admb-4000-8000-iosbanner320",
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
