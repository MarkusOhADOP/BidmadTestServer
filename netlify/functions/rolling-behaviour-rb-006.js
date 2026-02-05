// Rolling Behaviour Test RB-006: Empty ad units returns nil
// Waterfall: []
// requestToLoad -> returns nil, empty events
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
