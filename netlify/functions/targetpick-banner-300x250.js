// TargetPick (메조미디어 LibADPlus) banner mock.
// adcode is the composite placement: "publisherID|mediaID|sectionID" (sample-app pid 102/202/804231).
// Size 300x250 — note TargetPick's sectionID 804231 may serve 414x40 natively; watch the SDK
// response if the served creative doesn't match.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-tpck-4000-8000-banner300250": {
          adcode: "102|202|804231",
          pubid: "",
          passback: "",
          adtype: "63022682-ca98-49e2-a211-f62288ca315e",
          advidx: "63022682-ca98-49e2-a211-f62288ca315e",
          areaidx: "a1b2c3d4-tpck-4000-8000-banner300250",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
