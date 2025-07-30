export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "aa0b053d-e286-44a6-866d-000000000001": {
          adcode: "ca-app-pub-3940256099942544-fail/2435281174-fail",
          pubid: "",
          passback: "0f271960-8c75-4ccb-9d68-000000000002",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "aa0b053d-e286-44a6-866d-f754bb7315ae",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
        "0f271960-8c75-4ccb-9d68-18c2272b8056": {
          adcode: "57342d787174ea39844cac11",
          pubid: "57342fdd7174ea39844cac15",
          passback: "cc030af1-a8e2-4f1b-b001-f09b25589f0f",
          adtype: "c7923801-a94e-11ea-8e02-021baddf8c08",
          advidx: "ac5bb834-7f10-4301-bda6-a422fbb97d80",
          areaidx: "0f271960-8c75-4ccb-9d68-18c2272b8056",
          adweight: "100",
          adv_price: "1",
          order: "2",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
