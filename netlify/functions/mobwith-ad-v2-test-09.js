export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: "0000",
      message: "SUCCESS",
      data: {
        zone: "10890443",
        adCnt: 1,
        externalInfo: {
          externalId: "invalid_url_test",
          logoMainImgUrl: "invalid-url-format",
          logoSubImgUrl: "not-a-url",
          logoLandingUrl: "javascript:alert('xss')",
          impTrackers: ["malformed-tracker-url"],
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: "",
              aSiteUrl: "invalid-url",
              aSiteTitle: "",
              aLogoMainImgUrl: "not-a-valid-url",
              aLogoSubImgUrl: "",
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "invalid-video-url",
            adImgUrl: "malformed-image-url",
            adImgUrlInfo: {
              adImg120_600: "",
              adImg160_600: "",
              adImg250_250: "",
              adImg300_250: "invalid-image-url",
              adImg320_50: "",
              adImg320_100: "",
              adImg320_480: "",
              adImg720_120: "",
              adImg720_1230: "",
              adImg728_90: "",
              adImg800_1500: "",
            },
            adLandingUrl: "javascript:void(0)",
            adImpTrackers: ["malformed-imp-tracker"],
            adClickTrackers: ["malformed-click-tracker"],
            adDesc: "",
            productInfo: {
              pCode: "",
              pName: "",
              pPrice: "",
              pDcRate: 0,
              pDcPrice: "",
              pDeliveryYn: "",
            },
          },
        ],
      },
    }),
  };
};
