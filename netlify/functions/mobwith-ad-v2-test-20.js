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
          externalId: "special_characters_test",
          logoMainImgUrl:
            "https://example.com/image.jpg?param=한글&special=!@#$%^&*()",
          logoSubImgUrl: "https://example.com/한글경로/image.png",
          logoLandingUrl: "https://example.com/landing?한글=값&special=<>\"'",
          impTrackers: ["https://tracker.com/imp?한글=값&special=<>\"'"],
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: "한글 사이트명 & Special Characters",
              aSiteUrl: "https://한글사이트.com/경로?한글=값",
              aSiteTitle: "한글 제목 & Special Characters !@#$%",
              aLogoMainImgUrl: "https://example.com/한글로고.png",
              aLogoSubImgUrl: "",
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "",
            adImgUrl: "https://example.com/한글이미지.jpg?한글=값",
            adImgUrlInfo: {
              adImg120_600: "",
              adImg160_600: "",
              adImg250_250: "",
              adImg300_250: "https://example.com/한글이미지300x250.jpg",
              adImg320_50: "",
              adImg320_100: "",
              adImg320_480: "",
              adImg720_120: "",
              adImg720_1230: "",
              adImg728_90: "",
              adImg800_1500: "",
            },
            adLandingUrl:
              "https://한글랜딩페이지.com/경로?한글=값&special=<>\"'",
            adImpTrackers: ["https://tracker.com/imp?한글=값&special=<>\"'"],
            adClickTrackers: [
              "https://tracker.com/click?한글=값&special=<>\"'",
            ],
            adDesc: "한글 설명 & Special Characters !@#$%^&*()",
            productInfo: {
              pCode: "한글상품코드",
              pName: "한글 상품명 & Special Characters !@#$%",
              pPrice: "1,000,000원",
              pDcRate: 0,
              pDcPrice: "900,000원",
              pDeliveryYn: "Y",
            },
          },
        ],
      },
    }),
  };
};
