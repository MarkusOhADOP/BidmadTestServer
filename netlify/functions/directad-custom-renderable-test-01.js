// DirectAd Custom Renderable Test - JSON data (not HTML)
// adcode = stringified JSON with imageUrl, impUrl, clkUrl
// The SDK parses this into BidmadCustomRenderableAdContent
// type: "customrenderable" tells SDK to parse as custom renderable ad type
const adContent = JSON.stringify({
  imageUrl: "https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504820_960_720.jpg",
  impUrl: "https://bidmad-test-server.netlify.app/.netlify/functions/directad-impression-tracker",
  clkUrl: "https://bidmad-test-server.netlify.app/.netlify/functions/directad-click-tracker",
});

const response = {
  command: "ok",
  isFBB: "N",
  status: "200",
  type: "customrenderable",
  ads: {
    "da-custom-0001-0000-0000-000000000001": {
      adcode: adContent,
      pubid: "",
      passback: "",
      adtype: "d1rect0d-d1re-ctad-d1re-ctadd1rectad",
      advidx: "da-custom-vidx-0000-000000000001",
      areaidx: "da-custom-0001-0000-0000-000000000001",
      adweight: "100",
      adv_price: "1",
      order: "1",
      width: "0",
      height: "0",
    },
  },
};

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
