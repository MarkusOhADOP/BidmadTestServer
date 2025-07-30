export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      statusFfds: "200",
      ads: {
        "aa0b053d-e286-44a6-866d-000000000001": {
          adcode: "ca-app-pub-3940256099942544-fail/2435281174-fail",
          pubid: "",
          passback: "0f271960-8c75-4ccb-9d68-18c2272b8056",
          adtype: "ce56da00-1a18-11e9-9ed2-02c31b446301",
          width: "320",
          height: "50",
        },
        "aa0b053d-e286-44a6-866d-000000000002": {
          adcode: "128703",
          pubid: "544324-fail",
          passback: "0f271960-8c75-4ccb-9d68-18c2272b8056",
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "aa0b053d-e286-44a6-866d-f754bb7315ae",
          adweight: "100",
          adv_price: "1",
          order: "2",
          width: "320",
        },
        "5176d8ce-54be-4c35-b092-d44b0f1b9a2d": "Hello wordl",
      },
    }),
  };
};
