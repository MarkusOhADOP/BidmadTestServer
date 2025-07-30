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
        "cb7e0630-2eec-4c1d-8367-e0586461113e": {
          adcode: "jeomsin|10887867|techlabs",
          pubid: "",
          passback: "",
          adtype: "5becd78a-55f7-11ef-8e98-026864a21938",
          advidx: "c26e8b70-eccd-42ee-be78-57abf84fad92",
          areaidx: "cb7e0630-2eec-4c1d-8367-e0586461113e",
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
