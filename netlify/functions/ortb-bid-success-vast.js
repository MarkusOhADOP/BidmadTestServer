// Returns a VAST video bid response for testing the VAST rendering path.
// Uses a public sample VAST tag from the IAB.
// Expected: JS flow → renderVAST → IMA SDK loads → adsManager.start() → Android.onLoad()
export const handler = async () => ({
  statusCode: 200,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "test-vast-" + Date.now(),
    statusCode: 200,
    message: "OK",
    vidoeType: "VAST",
    videoType: "VAST",
    domain: "test-vast.bidmad.net",
    netName: "TestVASTNetwork",
    netIdx: "e2e-test-0000-0000-000000000002",
    ext: { viewable_ratio: 0.5 },
    seatbid: [{
      bid: [{
        id: "vast-bid-" + Date.now(),
        price: 5.00,
        adm: `<?xml version="1.0" encoding="UTF-8"?>
<VAST version="3.0">
  <Ad id="test-vast-ad">
    <InLine>
      <AdSystem>E2E Test</AdSystem>
      <AdTitle>ORTB E2E VAST Test</AdTitle>
      <Impression><![CDATA[https://bidmad-test-server.netlify.app/.netlify/functions/ortb-bid-success-vast?event=impression]]></Impression>
      <Creatives>
        <Creative>
          <Linear>
            <Duration>00:00:05</Duration>
            <MediaFiles>
              <MediaFile delivery="progressive" type="video/mp4" width="320" height="180">
                <![CDATA[https://storage.googleapis.com/gvabox/media/samples/stock.mp4]]>
              </MediaFile>
            </MediaFiles>
            <VideoClicks>
              <ClickThrough><![CDATA[https://test.bidmad.net/vast-click]]></ClickThrough>
            </VideoClicks>
          </Linear>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>`,
        adid: "test-vast-ad-001",
        adomain: ["test.bidmad.net"],
        crid: "test-vast-creative-001",
        w: 320,
        h: 250
      }]
    }],
    cur: "USD"
  })
});
