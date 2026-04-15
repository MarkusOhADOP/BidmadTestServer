// Returns a NATIVE bid response with the `icon_right_cta` layout.
// See ortb-native-bid-icon-bottom-cta.js for the full contract documentation.
const TINY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-native-icon-right-cta-" + Date.now(),
    statusCode: 200,
    message: "OK",
    creativeType: "NATIVE",
    vidoeType: "NATIVE",
    domain: "test-native.bidmad.net",
    netName: "TestNetworkNative",
    netIdx: "e2e-test-0000-0000-native-iconright",
    seatbid: [{
      bid: [{
        id: "bid-native-" + Date.now(),
        price: 1.10,
        adm: null,
        adid: "test-native-002",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-native-002",
        ext: {
          native: {
            layout: "icon_right_cta",
            assets: {
              title: "Best Deal",
              description: "Save up to 50% — only today",
              cta: "Get",
              iconUrl: TINY_PNG
            },
            link: {
              url: "https://example.com/landing/icon-right-cta"
            }
          }
        }
      }]
    }],
    cur: "USD"
  })
});
