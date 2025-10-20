export const handler = async () => {
  return {
    statusCode: 400, // 잘못된 요청
    body: JSON.stringify({
      code: "4001",
      message: "BAD REQUEST",
      data: null,
    }),
  };
};
