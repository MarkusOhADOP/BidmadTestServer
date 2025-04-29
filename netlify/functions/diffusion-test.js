export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: "f11c3e85-940e-4727-818b-15f8b2c7625f",
      netIdx: "al48jd-allen-digitalcamp-net-idx",
      netName: "DigitalCamp",
      domain: "com.test.app",
      statusCode: 200,
      seatbid: [
        {
          bid: [
            {
              id: "17397718322490023301037",
              price: 0.1,
              nurl: "https://ticp.digitalcamp.co.kr/tc/tc_mv_win_notice.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA",
              adm: '<VAST version="4.0" xmlns:xs="http://www.w3.org/2001/XMLSchema"><Ad id="233"><InLine><AdSystem>multiplayer V1.0</AdSystem><AdTitle>digitalcamp multiplayer ad</AdTitle><Impression id="39b5b591-b8bb-4e09-a4dd-d4d358e6a8e9"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=view]]></Impression><Error></Error><Pricing model="cpc" currency="USD"><![CDATA[0.1]]></Pricing><Creatives><Creative id="233_V" sequence="1"><Linear><Duration>00:00:15</Duration><TrackingEvents><Tracking event="firstQuartile"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=q1]]></Tracking><Tracking event="midpoint"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=q2]]></Tracking><Tracking event="thirdQuartile"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=q3]]></Tracking><Tracking event="complete"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=q4]]></Tracking><Tracking event="progress" offset="00:00:01"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=calc]]></Tracking><Tracking event="progress" offset="00:00:05"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_imp.php?bid=17397718322490023301037&message=7f54c54bcd0def644b8a3280706474c29cb481a161f623fb6d897a4180518410&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeXjExNjFeRA&pl=view5]]></Tracking></TrackingEvents><VideoClicks><ClickThrough id="ClickThrough"><![CDATA[https://ticp.digitalcamp.co.kr/tc/tc_mv_click.php?message=5bcefa93e6e16a8a4efb4d2bb864b40fd9124c4ef753db7787eaa24dba47517f&date=1739771832&param=MjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeMDowOjA6MDowOjA6MDoxXnNhbXN1bmdeU00tTjk1ME5eQW5kcm9pZF44LjAuMV5eXm12XjExNjFeRA&adurl=https%3A%2F%2Fwww.digitalcamp.co.kr%3Fclick_id%3DMjMzXjEwMzdeTV5NXjU1NTU1NTU1LTY1MTUtNGM5OC1hZWZlLTU1NTU1NTU1NTU0Nl4wLjFeMDowOjA6MDowOjA6MDoxXnNhbXN1bmdeU00tTjk1ME5eQW5kcm9pZF44LjAuMV5eXm12XjExNjFeRA%26sub_id%3D1037%26ad_id%3D55555555-6515-4c98-aefe-555555555546]]></ClickThrough></VideoClicks><MediaFiles><MediaFile id="233_V" delivery="progressive" type="video/mp4" width="300" height="250"><![CDATA[https://tadmv.digitalcamp.co.kr/adfiles/2/x5LJpjnUXISk.mp4]]></MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>',
              adomain: ["cellreon.com"],
              iurl: "https://tadmv.digitalcamp.co.kr/adfiles/2/x5LJpjnUXISk.mp4",
              cid: "233",
              crid: "233_V",
              cat: ["IAB3"],
              w: 300,
              h: 250,
              impid: "39b5b591-b8bb-4e09-a4dd-d4d358e6a8e9",
            },
          ],
          seat: "multiplay",
        },
      ],
      bidid: "digitalcamp",
      cur: "USD",
    }),
  };
};
