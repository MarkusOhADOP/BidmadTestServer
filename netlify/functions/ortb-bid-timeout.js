// Simulates a slow bid response that exceeds the 5-second timeout in AdViewORTBAdapter.
// The native timeout timer fires before this responds, triggering onFail → notifyLoadFailed.
// Expected: [ORTB-E2E][Timeout] FIRED, then [ORTB-E2E][Load] TIMEOUT
export const handler = async () => {
  await new Promise(resolve => setTimeout(resolve, 8000)); // 8 seconds
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      statusCode: 200,
      vidoeType: "NO_VAST",
      seatbid: [{
        bid: [{
          adm: "<div style='background:green;width:320px;height:50px;text-align:center;line-height:50px;color:white;'>LATE RESPONSE (should not render)</div>",
          price: 0.01
        }]
      }]
    })
  };
};
