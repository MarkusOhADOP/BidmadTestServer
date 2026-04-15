// Returns a non-200 bid response. The JS main() flow should throw "Bad status: 500"
// and call Android.onFail("Bad status: 500").
// Expected: [ORTB-E2E][JS] FAILED: Bad status: 500
export const handler = async () => ({
  statusCode: 200, // HTTP 200, but bid statusCode is 500
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    statusCode: 500,
    message: "Internal bid server error",
    seatbid: []
  })
});
