// Impression tracking endpoint for DirectAd Custom Renderable
// Called by BMCustomRenderableAd.reportImpression()
export const handler = async (event) => {
  console.log("[DirectAd] Impression tracked at:", new Date().toISOString());
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "impression_recorded" }),
  };
};
