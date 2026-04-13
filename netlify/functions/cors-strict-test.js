// Strict-CORS test endpoint for WKWebView / Android WebView loadHTMLString
// (vs loadDataWithBaseURL) CORS behavior validation.
//
// Unlike most Bidmad test functions which use Access-Control-Allow-Origin: *,
// this one returns only a specific allowed origin so that a page origin
// mismatch will produce a real CORS failure in the browser.
//
// Used by:
//   - iOS  : WebViewLoadDataViewController (BidmadSDK-DevSuite-NextGen)
//   - AOS  : WebViewLoadDataActivity       (BidmadSDK-AOS demo app)

const ALLOWED_ORIGIN = "https://httpbin.org";

export const handler = async (event) => {
  const commonHeaders = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Vary": "Origin",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        ...commonHeaders,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
      },
      body: "",
    };
  }

  return {
    statusCode: 200,
    headers: commonHeaders,
    body: JSON.stringify({
      cors_test: true,
      allowed_origin: ALLOWED_ORIGIN,
      request_origin: event.headers?.origin ?? null,
      message: `This endpoint only allows ${ALLOWED_ORIGIN}. Any other origin will be CORS-blocked.`,
    }),
  };
};
