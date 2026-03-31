// Refresh Stale View Crash Test
// Single TEST adapter entry with rolling=5 (5s refresh).
// The adapter succeeds immediately, then fires addAdViewToContainer again at 8s
// (simulating ad SDK auto-refresh). The 5s rolling triggers a refresh cycle
// that abandons the adapter ~6s in. The 8s callback hits the abandoned adapter
// → IllegalStateException: "child already has a parent".
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "5",
      ads: {
        "refresh-stale-view-crash": {
          adcode: "refresh-stale-view-crash",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a1b2c3d4-dead-beef-cafe-100000000001",
          areaidx: "refresh-stale-view-crash",
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
