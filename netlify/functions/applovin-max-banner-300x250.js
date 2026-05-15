// AppLovin MAX Banner 300x250 (MREC).
// adcode = SDK key (appId), pubid = MAX MREC ad-unit identifier (placementId)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0016-4000-8000-applovinmx00250": {
          adcode:
            "XdnXU3f54cTAyFTQyu2k6zU78GyvMWhDJF7BIlJ2Ms94r3CRiveA_ewD-2fGbkSHO5H0tTS_pfoo7XAMmfFNBK",
          pubid: "4217b54cbf708c2b",
          passback: "",
          adtype: "31534d43-944a-11ec-8e02-021baddf8c08",
          advidx: "31534d43-vidx-0000-0000-applovinmx250",
          areaidx: "a1b2c3d4-0016-4000-8000-applovinmx00250",
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
