export const handler = async () => {
  return {
    statusCode: 500, // 서버 에러
    body: JSON.stringify({
      error: "Internal Server Error",
      message: "Something went wrong on the server",
    }),
  };
};
