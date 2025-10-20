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
          externalId: "missing_productinfo_test",
          logoMainImgUrl: "",
          logoSubImgUrl: "",
          logoLandingUrl: "",
          impTrackers: [],
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: "",
              aSiteUrl: "",
              aSiteTitle: "",
              aLogoMainImgUrl: "",
              aLogoSubImgUrl: "",
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "",
            adImgUrl: "https://example.com/image.jpg",
            adImgUrlInfo: {
              adImg120_600: "",
              adImg160_600: "",
              adImg250_250: "",
              adImg300_250: "https://example.com/image.jpg",
              adImg320_50: "",
              adImg320_100: "",
              adImg320_480: "",
              adImg720_120: "",
              adImg720_1230: "",
              adImg728_90: "",
              adImg800_1500: "",
            },
            adLandingUrl: "https://example.com",
            adImpTrackers: [],
            adClickTrackers: [],
            adDesc: "",
            // productInfo 필드 누락
          },
        ],
      },
    }),
  };
};
