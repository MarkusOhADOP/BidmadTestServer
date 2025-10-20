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
          externalId: "missing_advertinfo_test",
          logoMainImgUrl: "",
          logoSubImgUrl: "",
          logoLandingUrl: "",
          impTrackers: [],
        },
        // advertInfo 필드 누락
      },
    }),
  };
};
