export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      updated_at: "2025-06-13T10:30:00Z",
      areas: {
        "3628d494-88f3-48e5-b8fc-1de5b260b7fb": {
          VPC: 0.01,
          VPI: 0.02,
        },
        "ac49569a-9a35-471e-85e7-92a5a6b859f5": {
          VPC: 0.03,
          VPI: 0.04,
        },
        "cbbc876a-35ea-415b-8b3f-9a541bdf40b6": {
          VPC: 0.05,
          VPI: 0.06,
        },
        "f59ffb0b-121b-48c5-9ef1-b7f31bbeb21b": {
          VPC: 0.07,
          VPI: 0.08,
        },
        "aea61d90-95a7-4e0d-addb-94f4c8707906": {
          VPC: 0.09,
          VPI: 0.1,
        },
        "7cddcedb-e54b-4ef9-b582-3e828c18e600": {
          VPC: 0.11,
          VPI: 0.12,
        },
        "ccb53336-9aaa-4295-9635-e8bbc95ac13c": {
          VPC: 0.13,
          VPI: 0.14,
        },
      },
    }),
  };
};
