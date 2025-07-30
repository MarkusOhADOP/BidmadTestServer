export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "0f271960-8c75-4ccb-9d68-18c2272b8056": {
          adcode: "57342d787174ea39844cac11",
          pubid: "57342fdd7174ea39844cac15",
          passback: "cc030af1-a8e2-4f1b-b001-f09b25589f0f",
          adtype: "c7923801-a94e-11ea-8e02-021baddf8c08",
          advidx: "ac5bb834-7f10-4301-bda6-a422fbb97d80",
          areaidx: "0f271960-8c75-4ccb-9d68-18c2272b8056",
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
