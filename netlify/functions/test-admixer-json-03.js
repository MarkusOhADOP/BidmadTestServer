export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: false,
      error_code: "E0004",
      error_message: "No Ads",
    }),
  };
};
