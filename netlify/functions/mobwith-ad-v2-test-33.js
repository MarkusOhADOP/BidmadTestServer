export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      code: "0000",
      message: "SUCCESS",
      data: {
        adCnt: 1,
        advertInfo: [
          {
            advertiserInfo: {
              aSiteName: "",
              aSiteUrl: "",
              aSiteTitle: "",
              aLogoMainImgUrl:
                "//img.mobwithad.com/ad/imgfile/logo/coupang/aLogoDefault_img.png",
              aLogoSubImgUrl: "",
            },
            adType: "banner",
            adPrdtYn: "Y",
            adVideoUrl: "",
            adImgUrl:
              "https://ads-partners.coupang.com/openapi/image/A6A24t8lPQRA3jYBAzugjuBGjO82eVQ0h3l_IZd65UMbC4PHA97B8aIuwPJKXcdFv07dEFbPVDbQqiATD2Ikl91aeE9SnG77xKmg7-JuXT7K9DEqLexV_RVKdOVXB_AGnGCRcpS8ghS8mg_KgWkd_xAJrls6_dEtnFgc-gisBuLIZKhOrFSR1Ign0MioAyyU7OFYhFS7aMj2RxxXuBYiZiO6gjcOH2EU3XX-n40KSKHwQRrL3TLaUd_mqBz1PUxowTtmiGR57EFm0gR3Mppn0-35ZAh5NCjWh35biWXa2aautgLGiKXjFUX76FX2BPlpaGbqMVFNGelxVz3JmmS_1PWzZ1Bnhde5KQKqjVWIQJrVwK8=",
            adImgUrlInfo: {
              adImg120_600: "",
              adImg160_600: "",
              adImg250_250: "",
              adImg300_250:
                "https://ads-partners.coupang.com/openapi/image/A6A24t8lPQRA3jYBAzugjuBGjO82eVQ0h3l_IZd65UMbC4PHA97B8aIuwPJKXcdFv07dEFbPVDbQqiATD2Ikl91aeE9SnG77xKmg7-JuXT7K9DEqLexV_RVKdOVXB_AGnGCRcpS8ghS8mg_KgWkd_xAJrls6_dEtnFgc-gisBuLIZKhOrFSR1Ign0MioAyyU7OFYhFS7aMj2RxxXuBYiZiO6gjcOH2EU3XX-n40KSKHwQRrL3TLaUd_mqBz1PUxowTtmiGR57EFm0gR3Mppn0-35ZAh5NCjWh35biWXa2aautgLGiKXjFUX76FX2BPlpaGbqMVFNGelxVz3JmmS_1PWzZ1Bnhde5KQKqjVWIQJrVwK8=",
              adImg320_50: "",
              adImg320_100: "",
              adImg320_480: "",
              adImg720_120: "",
              adImg720_1230: "",
              adImg728_90: "",
              adImg800_1500: "",
            },
            adLandingUrl:
              "https://link.coupang.com/re/AFFSDP?lptag=AF8713064&subid=re10890443c&pageKey=8335434837&itemId=0&vendorItemId=91088074310&traceid=V0-193-5cc4199aae5b150b&requestId=20250812143534217018697869&token=31296C%7CCMG",
            adImpTrackers: [],
            adClickTrackers: [],
            adDesc: "",
            productInfo: {
              pCode: "-254499755",
              pName: "[쿠팡] Apple 정품 아이폰 16 자급제, 화이트, 256GB",
              pPrice: "1358000",
              pDcRate: 0,
              pDcPrice: "",
              pDeliveryYn: "Y",
            },
          },
        ],
      },
    }),
  };
};
