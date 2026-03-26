// AdFit Banner 320x50
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "a1b2c3d4-0006-4000-8000-adfit320x050": {
          adcode: "DAN-x8KvQqRmViwhzd3I",
          pubid: "",
          passback: "",
          adtype: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          advidx: "5e0ce4ec-57ec-4dbd-9703-dc330d027c40",
          areaidx: "a1b2c3d4-0006-4000-8000-adfit320x050",
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
