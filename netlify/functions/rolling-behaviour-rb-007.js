// Rolling Behaviour Test RB-007: Nil ad unit returns nil
// Waterfall: nil
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
    }),
  };
};
