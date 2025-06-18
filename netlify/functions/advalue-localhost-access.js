export const handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Max-Age": "86400",
      },
      body: "",
    };
  }

  const adValResponse = await fetch(
    "https://p93ov2xysc.execute-api.ap-northeast-2.amazonaws.com/PROD/ad-data"
  );

  const adValData = await adValResponse.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adValData),
  };
};
