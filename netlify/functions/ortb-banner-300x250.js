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
      // areaidx (the dict key) becomes adUnit.realZoneId in the SDK and
      // is exposed to the CDN HTML's JS via the `zoneId` field of
      // getAdRequestInfo. We use "native-combined-top" so the JS routing
      // table (ZONE_TO_NATIVE_BID) maps it to the matching native bid
      // mock endpoint. UUID validation is bypassed in test mode.
      ads: {
        "native-combined-top": {
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
