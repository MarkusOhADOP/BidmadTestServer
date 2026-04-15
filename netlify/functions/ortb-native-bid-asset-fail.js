// Returns a NATIVE bid response with a deliberately broken `imageUrl`
// (malformed base64 in a data URL). The SDK should fail the load —
// `Promise.all(img.decode())` rejects on the broken asset and the outer
// catch posts onFail to native, which advances the waterfall.
//
// Use this to verify the strict "any single asset failure = ad load failure"
// policy without needing network errors.
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const BROKEN_DATA_URL = "data:image/png;base64,!!!notvalidbase64!!!";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-asset-fail-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-assetfail",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 1.00,
        adm: null,
        adid: "test-native-006",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-006",
        ext: {
          native: {
            layout: "combined_top_image",
            assets: {
              title: "Should Fail",
              description: "This bid intentionally has a broken image URL",
              cta: "...",
              iconUrl: TINY_PNG,
              imageUrl: BROKEN_DATA_URL  // <-- intentionally broken
            },
            link: {
              url: "https://example.com/landing/asset-fail"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
