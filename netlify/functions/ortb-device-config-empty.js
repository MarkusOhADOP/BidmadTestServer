// Returns a device config with ALL fields disabled (false).
// The SDK should still succeed at config fetch but enabledFields will be empty.
// The JS getDeviceInfoWhitelist will return all false → getDeviceInfo with 0 fields.
// Expected: bid still fires but with minimal device object (neutral fields only if any)
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    htmlEndpoint: "https://bidmad-test-server.netlify.app/.netlify/functions/ortb-advanced-cdn-html",
    device: {
      ua: false, sua: false, geo: false, dnt: false, lmt: false,
      devicetype: false, make: false, model: false, os: false, osv: false,
      hwv: false, h: false, w: false, ppi: false, pxratio: false,
      js: false, geofetch: false, language: false, langb: false,
      carrier: false, mccmnc: false, connectiontype: false, ifa: false
    }
  })
});
