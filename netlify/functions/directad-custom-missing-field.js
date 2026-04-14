// DirectAd CustomRendered Test: JSON missing impUrl field
// Tests: Adapter rejects with error code -3 "Missing required fields"
// Expected: imageUrl=present, impUrl=empty, clkUrl=present → loadFail
const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "customrenderedad",
  ads: {
    "da-custom-miss-0000-000000000001": {
      adcode: JSON.stringify({
        imageUrl: "https://direct-ad-img.adop.cc/4/1.jpg",
        clkUrl: "https://direct-ad.adop.cc/serving/clk.php?test=missing-impurl",
      }),
      pubid: "",
      passback: "",
      adtype: "e1d98b1e-21a9-11f1-ac1e-021407ef2d0b",
      advidx: "da-custom-miss-vidx-000000000001",
      areaidx: "da-custom-miss-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "0",
      height: "0",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
