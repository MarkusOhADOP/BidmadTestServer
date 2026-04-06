export const handler = async (event) => {
  const siteIdx = event.queryStringParameters?.site_idx || "unknown";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      device: {
        ua: "r",
        sua: "o",
        geo: "r",
        dnt: "r",
        lmt: "r",
        devicetype: "r",
        make: "r",
        model: "r",
        os: "r",
        osv: "r",
        hwv: "o",
        h: "o",
        w: "o",
        ppi: "o",
        pxratio: "o",
        js: "o",
        geofetch: "o",
        language: "r",
        langb: "o",
        carrier: "o",
        mccmnc: "o",
        connectiontype: "r",
        ifa: "r",
        ext: "n",
      },
    }),
  };
};
