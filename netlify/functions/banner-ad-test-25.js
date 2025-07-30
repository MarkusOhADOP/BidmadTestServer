export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      ads: {
        "aa0b053d-e286-44a6-866d-000000000001": {
          adcode: "banner-ad-test-25",
          pubid: "",
          passback: "0f271960-8c75-4ccb-9d68-18c2272b8056",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "23503470-4e23-4a84-a77b-a9fe25deb784",
          areaidx: "aa0b053d-e286-44a6-866d-f754bb7315ae",
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
