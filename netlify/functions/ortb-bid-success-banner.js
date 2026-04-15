// Returns a guaranteed-success banner bid response (NO_VAST, static HTML creative).
// Does not depend on external DSPs — always returns the same ad markup.
// Use this to test the happy path without network variability.
// Expected: full JS flow → renderScript → Android.onLoad()
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-success-" + Date.now(),
    statusCode: 200,
    message: "OK",
    vidoeType: "NO_VAST",
    videoType: "NO_VAST",
    domain: "test-success.bidmad.net",
    netName: "TestNetwork",
    netIdx: "e2e-test-0000-0000-000000000001",
    ext: { viewable_ratio: 0.5 },
    seatbid: [{
      bid: [{
        id: "bid-" + Date.now(),
        price: 1.23,
        adm: `<div style="width:320px;height:50px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);display:flex;align-items:center;justify-content:center;border-radius:4px;">
  <span style="color:white;font-family:sans-serif;font-size:14px;font-weight:bold;">[E2E] ORTB Test Banner — Success</span>
</div>`,
        adid: "test-ad-001",
        adomain: ["test.bidmad.net"],
        crid: "test-creative-001",
        w: 320,
        h: 50
      }]
    }],
    cur: "USD"
  })
});
