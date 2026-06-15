// remove-during-fetch-test
//
// Purpose: prove BMBaseAd's `loadGeneration` epoch guard cancels a load whose
// `remove()` lands DURING the network fetch — i.e. before `execute()` runs and
// before a `currentAttempt` exists.
//
// This function intentionally DELAYS the HTTP response by ~4 seconds. A test
// calls `load()`, then `remove()` ~1.5s later (while this request is still in
// flight), then waits for this delayed response to arrive. With the fix, the
// fetch completion fails the epoch check and `execute()` never runs, so the
// returned TEST adapter (`vis-test-always-success`, which would otherwise
// succeed immediately) is never instantiated and no ad is attached.
//
// adtype = TEST adapter UUID; adcode = vis-test-always-success (immediate success).
export const handler = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "remove-during-fetch-test": {
          adcode: "vis-test-always-success",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "09316c92-262a-463f-a73b-1f1c34a6de93",
          areaidx: "remove-during-fetch-test",
          adweight: "100",
          adv_price: "10",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
