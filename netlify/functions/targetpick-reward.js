// TargetPick (메조미디어 LibADPlus) rewarded video mock.
// adcode is the composite placement: "publisherID|mediaID|sectionID" (sample-app pid 102/202/804408).
// The adapter wraps ADMZVideoView in a modal VC and fires rewarded on code 309 (VideoAdComplete).
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "c3d4e5f6-tpck-4000-8000-rewardvideo": {
          adcode: "102|202|804408",
          pubid: "",
          passback: "",
          adtype: "63022682-ca98-49e2-a211-f62288ca315e",
          advidx: "63022682-ca98-49e2-a211-f62288ca315e",
          areaidx: "c3d4e5f6-tpck-4000-8000-rewardvideo",
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
