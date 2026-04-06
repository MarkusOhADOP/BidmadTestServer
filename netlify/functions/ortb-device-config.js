export const handler = async (event) => {
  const siteIdx = event.queryStringParameters?.site_idx || "unknown";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      device: {
        ua: true,
        sua: true,
        geo: true,
        dnt: true,
        lmt: true,
        devicetype: true,
        make: true,
        model: true,
        os: true,
        osv: true,
        hwv: true,
        h: true,
        w: true,
        ppi: true,
        pxratio: true,
        js: true,
        geofetch: true,
        language: true,
        langb: true,
        carrier: true,
        mccmnc: true,
        connectiontype: true,
        ifa: true,
        ext: false,
      },
    }),
  };
};
