// Unity Ads Banner — FAIL scenario (invalid placement ID)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0004-4000-8000-unityfail0001": {
          adcode: "INVALID_GAME_ID",
          pubid: "INVALID_PLACEMENT",
          passback: "",
          adtype: "2e88609b-d916-11e9-9e1d-02c31b446301",
          advidx: "2e88609b-d916-11e9-9e1d-02c31b446301",
          areaidx: "a1b2c3d4-0004-4000-8000-unityfail0001",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
