// Rolling Behaviour Test RB-106: Fail with empty units
// Waterfall: []
// failedToLoad -> Returns nil, empty events
// Empty ads object - no adapters available
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      rolling: "10",
      ads: {},
    }),
  };
};
