export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    htmlEndpoint: "https://bidmad-test-server.netlify.app/.netlify/functions/ortb-advanced-cdn-html",
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
