export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "cb7e0630-2eec-4c1d-8367-e0586461113e": {
          adcode: "jeomsin|10887867|techlabs",
          pubid: "",
          passback: "",
          adtype: "5becd78a-55f7-11ef-8e98-026864a21938",
          advidx: "c26e8b70-eccd-42ee-be78-57abf84fad92",
          areaidx: "cb7e0630-2eec-4c1d-8367-e0586461113e",
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
