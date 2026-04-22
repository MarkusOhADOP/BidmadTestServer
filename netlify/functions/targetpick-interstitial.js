// TargetPick (메조미디어 LibADPlus) fullscreen interstitial mock.
// adcode is the composite placement: "publisherID|mediaID|sectionID" (sample-app pid 100/200/804313).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "full",
      ads: {
        "b2c3d4e5-tpck-4000-8000-interstitial": {
          adcode: "100|200|804313",
          pubid: "",
          passback: "",
          adtype: "63022682-ca98-49e2-a211-f62288ca315e",
          advidx: "63022682-ca98-49e2-a211-f62288ca315e",
          areaidx: "b2c3d4e5-tpck-4000-8000-interstitial",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "1",
          height: "1",
        },
      },
    }),
  };
};
