// Returns a NATIVE bid response with the `icon_bottom_cta` layout.
// All assets use small data: URL PNGs so the response is fully self-contained
// (no external image dependencies — useful for offline / CI testing).
//
// Mirrors the contract documented in the Native Ad implementation plan:
//   - `creativeType` discriminator (preferred)
//   - `bid.ext.native` carries layout + assets + link
//   - Diffusion-side server handles tracking; no clicktrackers in payload
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-icon-bottom-cta-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",  // legacy alias for older SDKs
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-iconbottom",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 1.50,
        adm: null,  // unused for native
        adid: "test-native-001",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-001",
        ext: {
          native: {
            layout: "icon_bottom_cta",
            assets: {
              title: "Buy Now!",
              description: "Limited time offer — install today",
              cta: "Install",
              iconUrl: TINY_PNG
            },
            link: {
              url: "https://example.com/landing/icon-bottom-cta"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
