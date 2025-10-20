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
          externalId: "very_long_string_test",
          logoMainImgUrl: "a".repeat(10000), // 매우 긴 문자열
          logoSubImgUrl: "b".repeat(5000),
          logoLandingUrl: "c".repeat(8000),
          impTrackers: ["d".repeat(1000)],
        },
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: "e".repeat(2000),
              aSiteUrl: "f".repeat(3000),
              aSiteTitle: "g".repeat(1500),
              aLogoMainImgUrl: "h".repeat(4000),
              aLogoSubImgUrl: "i".repeat(2500),
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "j".repeat(6000),
            adImgUrl: "k".repeat(7000),
            adImgUrlInfo: {
              adImg120_600: "l".repeat(2000),
              adImg160_600: "m".repeat(2000),
              adImg250_250: "n".repeat(2000),
              adImg300_250: "o".repeat(2000),
              adImg320_50: "p".repeat(2000),
              adImg320_100: "q".repeat(2000),
              adImg320_480: "r".repeat(2000),
              adImg720_120: "s".repeat(2000),
              adImg720_1230: "t".repeat(2000),
              adImg728_90: "u".repeat(2000),
              adImg800_1500: "v".repeat(2000),
            },
            adLandingUrl: "w".repeat(5000),
            adImpTrackers: ["x".repeat(1000), "y".repeat(1000)],
            adClickTrackers: ["z".repeat(1000)],
            adDesc: "A".repeat(3000),
            productInfo: {
              pCode: "B".repeat(1000),
              pName: "C".repeat(2000),
              pPrice: "D".repeat(500),
              pDcRate: 0,
              pDcPrice: "E".repeat(500),
              pDeliveryYn: "F".repeat(100),
            },
          },
        ],
      },
    }),
  };
};
