// First entry is Covi — a known network with no fullscreen adapter class in the app, the everyday case of a zone listing a network the integration did not link. It must fail before any adapter exists and the waterfall must advance.
// BidmadSDK-DevSuite iOS — fullscreen ad test fixture.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "interstitial",
      ads: {
        "2a5a5cda-4f4c-4059-8a50-bac87d53fa8b": {
          adcode: "covi-placement",
          pubid: "",
          passback: "d2982f3b-6629-4de6-95df-63c6c4c8f40a",
          adtype: "2057ac18-0841-11eb-8e02-021baddf8c08",
          advidx: "aad2df44-d42a-46da-9419-eb0fb00e7dce",
          areaidx: "2a5a5cda-4f4c-4059-8a50-bac87d53fa8b",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
        "d2982f3b-6629-4de6-95df-63c6c4c8f40a": {
          adcode: "interstitial-success-test-01",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "11f45896-4667-4011-a85a-013503ce7249",
          areaidx: "d2982f3b-6629-4de6-95df-63c6c4c8f40a",
          adweight: "100",
          adv_price: "0",
          order: "2",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
