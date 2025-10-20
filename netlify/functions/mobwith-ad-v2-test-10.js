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
          externalId: "wrong_data_types_test",
          logoMainImgUrl: 123, // 숫자 타입
          logoSubImgUrl: true, // 불린 타입
          logoLandingUrl: [], // 배열 타입
          impTrackers: "string-instead-of-array", // 문자열 타입
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: 456, // 숫자 타입
              aSiteUrl: false, // 불린 타입
              aSiteTitle: {}, // 객체 타입
              aLogoMainImgUrl: null,
              aLogoSubImgUrl: "",
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "",
            adImgUrl: "",
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
            adLandingUrl: "",
            adImpTrackers: "not-an-array", // 문자열 타입
            adClickTrackers: 789, // 숫자 타입
            adDesc: "",
            productInfo: {
              pCode: "",
              pName: "",
              pPrice: "not-a-number", // 숫자가 아닌 문자열
              pDcRate: "not-a-number", // 숫자가 아닌 문자열
              pDcPrice: "",
              pDeliveryYn: "",
            },
          },
        ],
      },
    }),
  };
};
