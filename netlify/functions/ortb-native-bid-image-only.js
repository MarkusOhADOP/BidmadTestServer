// Returns a NATIVE bid response with the `image_only` layout.
// Only `imageUrl` is provided — title/description/cta/iconUrl are intentionally
// omitted to verify that the SDK does not require them for this layout.
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-image-only-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-imageonly",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 0.80,
        adm: null,
        adid: "test-native-003",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-003",
        ext: {
          native: {
            layout: "image_only",
            assets: {
              imageUrl: TINY_PNG
            },
            link: {
              url: "https://example.com/landing/image-only"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
