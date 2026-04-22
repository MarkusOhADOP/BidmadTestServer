// AdMob iOS interstitial (publisher 2626235926542867).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "full",
      ads: {
        "d2e3f4a5-admb-4000-8000-iosinterstitial": {
          adcode: "ca-app-pub-2626235926542867/5190304036",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "d2e3f4a5-admb-4000-8000-iosinterstitial",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "1",
          height: "1",
        },
      },
    }),
  };
};
