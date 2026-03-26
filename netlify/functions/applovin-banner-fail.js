// AppLovin Legacy Banner — invalid zone ID to trigger failure
// Uses valid SDK key but invalid pubid (placementId) to cause load failure
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0013-4000-8000-applovinfail00": {
          adcode:
            "XdnXU3f54cTAyFTQyu2k6zU78GyvMWhDJF7BIlJ2Ms94r3CRiveA_ewD-2fGbkSHO5H0tTS_pfoo7XAMmfFNBK",
          pubid: "INVALID_ZONE_ID_000000",
          passback: "",
          adtype: "b45c4d16-fa13-11e9-9e1d-02c31b446301",
          advidx: "b45c4d16-vidx-0000-0000-applovinfail00",
          areaidx: "a1b2c3d4-0013-4000-8000-applovinfail00",
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
