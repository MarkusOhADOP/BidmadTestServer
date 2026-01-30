// Rolling Behaviour Test 02: 3 ad networks where first fails
// Tests that rolling behaviour moves to next ad unit on failure
// First request fails (invalid adcode), second succeeds (Fyber)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "rolling-test-02-ad-001": {
          adcode: "ca-app-pub-3940256099942544-INVALID/INVALID",
          pubid: "",
          passback: "rolling-test-02-ad-002",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301", // Google AdMob (will fail)
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "rolling-test-area-002",
          adweight: "100",
          adv_price: "3",
          order: "1",
          width: "320",
          height: "50",
        },
        "rolling-test-02-ad-002": {
          adcode: "128703",
          pubid: "544324",
          passback: "rolling-test-02-ad-003",
          adtype: "b0745bea-6069-11eb-8e02-021baddf8c08", // Fyber
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "rolling-test-area-002",
          adweight: "100",
          adv_price: "2",
          order: "2",
          width: "320",
          height: "50",
        },
        "rolling-test-02-ad-003": {
          adcode: "4520003",
          pubid: "Banner_iOS",
          passback: "",
          adtype: "2e88609b-d916-11e9-9e1d-02c31b446301", // UnityAds
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "rolling-test-area-002",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
