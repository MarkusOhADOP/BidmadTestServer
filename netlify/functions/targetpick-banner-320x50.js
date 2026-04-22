// TargetPick (메조미디어 LibADPlus) banner mock at 320x50.
// adcode is the composite placement: "publisherID|mediaID|sectionID" (sample-app pid 102/202/804231).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a2b3c4d5-tpck-4000-8000-banner320x050": {
          adcode: "102|202|804231",
          pubid: "",
          passback: "",
          adtype: "63022682-ca98-49e2-a211-f62288ca315e",
          advidx: "63022682-ca98-49e2-a211-f62288ca315e",
          areaidx: "a2b3c4d5-tpck-4000-8000-banner320x050",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
