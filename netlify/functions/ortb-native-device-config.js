// Device-config endpoint variant for native ad testing.
// Returns the same field whitelist as the production-like
// `ortb-advanced-device-config`, but points `htmlEndpoint` at the test HTML
// (`ortb-native-html`) which routes bid requests to absolute test-server URLs.
//
// Use this when you want to exercise the native rendering pipeline end-to-end
// against the BidmadTestServer (no diffusion dependency).
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    htmlEndpoint:
      "https://bidmad-test-server.netlify.app/.netlify/functions/ortb-native-html",
    device: {
      ua: true, sua: true, geo: true, dnt: true, lmt: true,
      devicetype: true, make: true, model: true, os: true, osv: true,
      hwv: true, h: true, w: true, ppi: true, pxratio: true,
      js: true, geofetch: true, language: true, langb: true,
      carrier: true, mccmnc: true, connectiontype: true, ifa: true,
      ext: false
    }
  })
});
