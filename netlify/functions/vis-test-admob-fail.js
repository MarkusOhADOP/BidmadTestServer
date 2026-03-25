// Returns AdMob with an invalid ad unit ID — AdMob adapter will load and fail with a real callback.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "vis-test-admob-fail": {
          adcode: "ca-app-pub-0000000000000000/0000000000",
          pubid: "",
          passback: "",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "vis-test-admob-fail",
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
