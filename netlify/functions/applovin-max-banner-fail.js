// AppLovin MAX Banner — invalid placement ID to trigger failure path.
// `validateAppLovinMAXPlacementId` only rejects empty strings, so a non-empty
// but invalid placement passes pre-flight and reaches `MAAdView.loadAd`, which
// then calls `didFailToLoadAd:withError:` with a real MAError.
// adcode = SDK key (appId), pubid = invalid placement
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0017-4000-8000-applovinmxfail0": {
          adcode:
            "XdnXU3f54cTAyFTQyu2k6zU78GyvMWhDJF7BIlJ2Ms94r3CRiveA_ewD-2fGbkSHO5H0tTS_pfoo7XAMmfFNBK",
          pubid: "INVALID_MAX_PLACEMENT_00",
          passback: "",
          adtype: "31534d43-944a-11ec-8e02-021baddf8c08",
          advidx: "31534d43-vidx-0000-0000-applovinmxfail",
          areaidx: "a1b2c3d4-0017-4000-8000-applovinmxfail0",
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
