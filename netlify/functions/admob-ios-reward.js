// AdMob iOS rewarded video (publisher 2626235926542867).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "d3e4f5a6-admb-4000-8000-iosrewardvideo": {
          adcode: "ca-app-pub-2626235926542867/1724433998",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          areaidx: "d3e4f5a6-admb-4000-8000-iosrewardvideo",
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
