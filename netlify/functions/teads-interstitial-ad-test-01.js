export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "3628d494-88f3-48e5-b8fc-1de5b260b7fb": {
          adcode: "180029",
          pubid: "",
          passback: "5d7f0a60-22b0-4ef8-b2d0-0abeb8976940",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "8bdcd184-e3e3-49c9-9a51-aa9f23e5ab95",
          areaidx: "3628d494-88f3-48e5-b8fc-1de5b260b7fb",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "720",
          height: "1230",
        },
        "5d7f0a60-22b0-4ef8-b2d0-0abeb8976940": {
          adcode: "180029",
          pubid: "",
          passback: "160fbfb0-d433-4681-a51e-ec844f442a79",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "c26e8b70-eccd-42ee-be78-57abf84fad92",
          areaidx: "5d7f0a60-22b0-4ef8-b2d0-0abeb8976940",
          adweight: "100",
          adv_price: "1",
          order: "2",
          width: "720",
          height: "1230",
        },
        "160fbfb0-d433-4681-a51e-ec844f442a79": {
          adcode: "180029",
          pubid: "",
          passback: "722231e4-297b-4435-89a1-0d241f371170",
          adtype: "56ad4c2b-c956-11ed-b4f4-026864a21938",
          advidx: "f2735bf1-a0f4-4206-b74a-aa779212b472",
          areaidx: "160fbfb0-d433-4681-a51e-ec844f442a79",
          adweight: "100",
          adv_price: "1",
          order: "3",
          width: "720",
          height: "1230",
        },
      },
    }),
  };
};
