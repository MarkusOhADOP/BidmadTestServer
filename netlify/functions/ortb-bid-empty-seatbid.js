// Returns a 200 bid response with an empty seatbid array. The JS main() flow should
// throw "Empty seatbid" and call Android.onFail("Empty seatbid").
// Expected: [ORTB-E2E][JS] FAILED: Empty seatbid
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    statusCode: 200,
    message: "OK",
    vidoeType: "NO_VAST",
    domain: "test",
    netName: "empty-test",
    netIdx: "00000000-0000-0000-0000-000000000000",
    seatbid: []
  })
});
