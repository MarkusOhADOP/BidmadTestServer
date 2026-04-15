// Returns a NATIVE bid response with the `combined_top_image` layout
// (image on top, icon/text/CTA below).
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-combined-top-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-combinedtop",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 2.00,
        adm: null,
        adid: "test-native-004",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-004",
        ext: {
          native: {
            layout: "combined_top_image",
            assets: {
              title: "New Game",
              description: "Adventure awaits — download free",
              cta: "Play",
              iconUrl: TINY_PNG,
              imageUrl: TINY_PNG
            },
            link: {
              url: "https://example.com/landing/combined-top"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
