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
          externalId: "malformed_test",
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
            adImgUrl: "", // 빈 이미지 URL
            adImgUrlInfo: {
              adImg120_600: "",
              adImg160_600: "",
              adImg250_250: "",
              adImg300_250: "",
              adImg320_50: "",
              adImg320_100: "",
              adImg320_480: "",
              adImg720_120: "",
              adImg720_1230: "",
              adImg728_90: "",
              adImg800_1500: "",
            },
            adLandingUrl: "", // 빈 랜딩 URL
            adImpTrackers: [],
            adClickTrackers: [],
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
