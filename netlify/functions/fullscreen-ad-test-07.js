export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "reward",
      ads: {
        "86f5a010-2881-48e0-aa8a-492b74b0e1ff": {
          adcode:
            "jeomsin-ios-app|300x250 Test|thumbs-textover-300x250|https://apps.apple.com/kr/app/2025-\uc810\uc2e0-\uc744\uc0ac\ub144-\uc2e0\ub144\uc6b4\uc138-\uc0ac\uc8fc-\ud0c0\ub85c-\uc0c1\ub2f4/id960571015|article|mix",
          pubid: "",
          passback: "",
          adtype: "20740912-f034-11ef-b6ba-021407ef2d0b",
          advidx: "e59d3e48-4dea-4003-b61a-8fb54d852774",
          areaidx: "86f5a010-2881-48e0-aa8a-492b74b0e1ff",
          adweight: "100",
          adv_price: "0",
          order: "1",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
