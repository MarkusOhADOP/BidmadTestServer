// Adlib Banner Crash Test — single adlib entry, no fallback
// Zone: f9d29451-6fc1-4527-b855-dd5b03052862
// adtype UUID from Compass: ceaaacb4-683a-11f0-b6ba-021407ef2d0b (Adlib)
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "0",
      ads: {
        "f9d29451-6fc1-4527-b855-dd5b03052862": {
          adcode: "5ab217aeafe3a474b3be24dcfa8184ee",
          pubid: "4f92749e34ff70a2ae5206b0d564e94b",
          passback: "",
          adtype: "ceaaacb4-683a-11f0-b6ba-021407ef2d0b",
          advidx: "93c15699-a0d7-4931-84c7-2ae8a1bb61ef",
          areaidx: "f9d29451-6fc1-4527-b855-dd5b03052862",
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
