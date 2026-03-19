// Click tracking endpoint for DirectAd Custom Renderable
// Called by BMCustomRenderableAd.reportClick()
export const handler = async (event) => {
  console.log("[DirectAd] Click tracked at:", new Date().toISOString());
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "click_recorded" }),
  };
};
