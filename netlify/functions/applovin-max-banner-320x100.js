// AppLovin MAX Banner 320x100 — MAX has no dedicated 320x100 format.
// Adapter resolves (320,100) → MAFormat.banner, so MAX serves a 320x50 creative inside a 320x100 view.
// adcode = SDK key (appId), pubid = MAX ad-unit identifier (placementId)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0015-4000-8000-applovinmx00100": {
          adcode:
            "XdnXU3f54cTAyFTQyu2k6zU78GyvMWhDJF7BIlJ2Ms94r3CRiveA_ewD-2fGbkSHO5H0tTS_pfoo7XAMmfFNBK",
          pubid: "930af8fabf490596",
          passback: "",
          adtype: "31534d43-944a-11ec-8e02-021baddf8c08",
          advidx: "31534d43-vidx-0000-0000-applovinmx100",
          areaidx: "a1b2c3d4-0015-4000-8000-applovinmx00100",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "100",
        },
      },
    }),
  };
};
