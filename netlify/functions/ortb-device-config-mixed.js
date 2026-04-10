// Test fixture: mixed true/false CMS device-config response.
// Used to verify that BidmadORTBDeviceConfigManager.filterByCategory
// correctly includes only `true`-keyed fields and excludes `false`-keyed
// fields per-tier (device / location / neutral).
//
// Expected SDK behavior when this endpoint is wired in:
//   - device-tier collected = { make, model, ua, ifa, mccmnc }      ← only the 5 trues
//   - location-tier collected = { geofetch }                        ← only geofetch is true (no geo)
//   - neutral collected = { os, osv, osVersion }                    ← only os + osv (osv writes osVersion as dual-key)
//
// The test confirms: SDK is per-key granular, not all-or-nothing.

export const handler = async (event) => {
  const siteIdx = event.queryStringParameters?.site_idx || "unknown";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      device: {
        // ─── device-tier ───
        ua: true,             // include
        sua: false,           // exclude
        dnt: false,           // exclude
        lmt: false,           // exclude
        devicetype: false,    // exclude
        make: true,           // include
        model: true,          // include
        hwv: false,           // exclude
        h: false,             // exclude
        w: false,             // exclude
        ppi: false,           // exclude
        pxratio: false,       // exclude
        language: false,      // exclude
        langb: false,         // exclude
        carrier: false,       // exclude
        mccmnc: true,         // include — verify TelephonyManager.getNetworkOperator path
        connectiontype: false,// exclude
        ifa: true,            // include

        // ─── location-tier ───
        geo: false,           // exclude — should produce NO geo key in output
        geofetch: true,       // include — geofetch=0 or 1 alone, no geo

        // ─── neutral ───
        os: true,             // include
        osv: true,            // include (also writes osVersion as dual-key)
        js: false,            // exclude

        // ─── unknown / ignored ───
        ext: false,
      },
    }),
  };
};
