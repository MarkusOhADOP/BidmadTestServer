import { readFileSync } from 'fs';

export const handler = async () => {
  const html = readFileSync(new URL('./ortb-advanced-cdn-content.html', import.meta.url), 'utf8');
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "ETag": '"ortb-advanced-v2-debug"'
    },
    body: html
  };
};
