// Native: Vungle
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "native-vungle-001": {
          adcode: "65e97a61c8510816ad30c67a",
          pubid: "VUNGLE_TEST_NATIVE-6870486",
          passback: "",
          adtype: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          advidx: "1e1947d2-eff2-11e9-9e1d-02c31b446301",
          areaidx: "native-vungle-001",
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
