// Returns a NATIVE bid response with the `combined_bottom_image` layout
// (icon/text/CTA on top, image below).
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-combined-bottom-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-combinedbtm",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 1.80,
        adm: null,
        adid: "test-native-005",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-005",
        ext: {
          native: {
            layout: "combined_bottom_image",
            assets: {
              title: "Stay Fit",
              description: "Track workouts — start your free trial",
              cta: "Try Free",
              iconUrl: TINY_PNG,
              imageUrl: TINY_PNG
            },
            link: {
              url: "https://example.com/landing/combined-bottom"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
