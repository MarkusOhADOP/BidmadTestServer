// ORTB Banner 300x250 - returns ORTB-only Compass routing for testing
// the native ad path with combined_top_image / combined_bottom_image
// layouts at their natural display size.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      // Dict key (becomes adUnit.realZoneId -> JS adInfo.zoneId) stays
      // a UUID. The areaidx (becomes adUnit.areaIndex -> JS adInfo.areaIdx)
      // carries the routing string. The CDN HTML routes native-* keys
      // by inspecting BOTH adInfo.zoneId and adInfo.areaIdx.
      ads: {
        "a1b2c3d4-0009-4000-8000-ortb0300x250": {
          adcode: "",
          pubid: "all",
          passback: "",
          adtype: "5ad10035-f252-11ef-b6ba-021407ef2d0b",
          advidx: "5ad10035-f252-11ef-b6ba-021407ef2d0b",
          areaidx: "native-combined-top",
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
