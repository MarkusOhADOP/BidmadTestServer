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
          externalId: "null_values_test",
          logoMainImgUrl: null,
          logoSubImgUrl: null,
          logoLandingUrl: null,
          impTrackers: null,
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: null,
              aSiteUrl: null,
              aSiteTitle: null,
              aLogoMainImgUrl: null,
              aLogoSubImgUrl: null,
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: null,
            adImgUrl: null,
            adImgUrlInfo: {
              adImg120_600: null,
              adImg160_600: null,
              adImg250_250: null,
              adImg300_250: null,
              adImg320_50: null,
              adImg320_100: null,
              adImg320_480: null,
              adImg720_120: null,
              adImg720_1230: null,
              adImg728_90: null,
              adImg800_1500: null,
            },
            adLandingUrl: null,
            adImpTrackers: null,
            adClickTrackers: null,
            adDesc: null,
            productInfo: {
              pCode: null,
              pName: null,
              pPrice: null,
              pDcRate: null,
              pDcPrice: null,
              pDeliveryYn: null,
            },
          },
        ],
      },
    }),
  };
};
