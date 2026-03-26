// AppLovin Legacy Banner 300x250 (MRect)
// Device only — AppLovin SDK requires real device
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0011-4000-8000-applovi300x250": {
          adcode:
            "XdnXU3f54cTAyFTQyu2k6zU78GyvMWhDJF7BIlJ2Ms94r3CRiveA_ewD-2fGbkSHO5H0tTS_pfoo7XAMmfFNBK",
          pubid: "bd4b175ab2919611",
          passback: "",
          adtype: "b45c4d16-fa13-11e9-9e1d-02c31b446301",
          advidx: "b45c4d16-vidx-0000-0000-applovi300x250",
          areaidx: "a1b2c3d4-0011-4000-8000-applovi300x250",
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
