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
          externalId: "missing_adimgurlinfo_test",
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
            // adImgUrlInfo 필드 누락
            adLandingUrl: "https://example.com",
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
