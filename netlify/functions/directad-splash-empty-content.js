// DirectAd Splash Test: Empty HTML content
// Tests: onLoadFailAd fires when adcode is empty string
// Expected: BidmadSplashDirectAdAdapter guard fails with error code -1
const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "splash",
  ads: {
    "da-splash-empty-0000-000000000001": {
      adcode: "",
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-splash-empty-vidx-000000000001",
      areaidx: "da-splash-empty-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "320",
      height: "250",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
