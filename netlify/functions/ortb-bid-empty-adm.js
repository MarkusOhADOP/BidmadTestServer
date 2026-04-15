// Returns a bid response with a valid seatbid but empty adm field.
// The JS main() flow should throw "Empty adm" and call Android.onFail("Empty adm").
// Expected: [ORTB-E2E][JS] FAILED: Empty adm
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    statusCode: 200,
    message: "OK",
    vidoeType: "NO_VAST",
    domain: "test",
    netName: "empty-adm-test",
    netIdx: "00000000-0000-0000-0000-000000000001",
    seatbid: [{
      bid: [{
        adm: "",
        price: 0.0
      }]
    }]
  })
});
