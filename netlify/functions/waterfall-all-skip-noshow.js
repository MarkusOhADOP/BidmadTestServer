export const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    command: "ok",
    isFBB: "N",
    status: "200",
    type: "banner",
    ads: {
      "f0000001-0001-0001-0001-skip00000001": {
        adcode: "vis-test-always-success",
        pubid: "pub-skip-alpha",
        passback: "f0000001-0001-0001-0001-skip00000002",
        adtype: "testtest-test-test-test-testtesttest",
        advidx: "f0000001-0001-0001-0001-skip00000001",
        areaidx: "f0000001-0001-0001-0001-skip00000001",
        adweight: "0",
        adv_price: "1",
        order: "1",
        width: "320",
        height: "50"
      },
      "f0000001-0001-0001-0001-skip00000002": {
        adcode: "vis-test-always-success",
        pubid: "pub-skip-beta",
        passback: "",
        adtype: "testtest-test-test-test-testtesttest",
        advidx: "f0000001-0001-0001-0001-skip00000002",
        areaidx: "f0000001-0001-0001-0001-skip00000002",
        adweight: "0",
        adv_price: "1",
        order: "2",
        width: "320",
        height: "50"
      }
    }
  })
});
