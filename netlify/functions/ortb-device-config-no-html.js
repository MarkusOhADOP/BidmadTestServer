// Returns a valid device config but WITHOUT an htmlEndpoint.
// The SDK's initializeAsync should skip HTML fetch (Step 2).
// When loadAd() is called, BidmadORTBHTMLCacheManager.getHTML() returns null → load fails.
// Expected: [ORTB-E2E][Init] Step 2 skipped: no htmlEndpoint
//           [ORTB-E2E][Load] HTML not cached — load failed
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    device: {
      ua: true, sua: true, geo: true, dnt: true, lmt: true,
      devicetype: true, make: true, model: true, os: true, osv: true,
      hwv: true, h: true, w: true, ppi: true, pxratio: true,
      js: true, geofetch: true, language: true, langb: true,
      carrier: true, mccmnc: true, connectiontype: true, ifa: true
    }
  })
});
