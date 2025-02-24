export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { mediaKey: "10166", adunit: "100703" },
      { mediaKey: "10166", adunit: "100704" },
      { mediaKey: "10166", adunit: "100705" },
    ]),
  };
};
