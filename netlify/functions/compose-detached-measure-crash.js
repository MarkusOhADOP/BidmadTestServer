// Compose Detached Measure Crash Test
//
// Reproduces the production crash reported from Jeomsin (bidmad-androidx 3.28.2):
//
//   java.lang.IllegalStateException: Cannot locate windowRecomposer;
//   View androidx.compose.ui.platform.ComposeView{... app:id/moloco_fullscreen_ad_view_id}
//   is not attached to a window
//     at androidx.compose.ui.platform.AbstractComposeView.onMeasure
//     ...
//     at com.adop.sdk.adview.BMBanner.getBannerSize(BMBanner.java:542)
//     at com.adop.sdk.adview.BMBanner.onAdLoadComplete(BMBanner.java:115)
//
// BMBanner.getBannerSize() calls containerView.measure(...) unconditionally on
// load completion. When the container is not attached to a window (the normal
// state for the Flutter PlatformView path, where FlutterBannerRefined.load()
// runs before attachView()), any Compose-based creative throws from onMeasure.
// Nothing on the path from BMBaseAd.callLoadedCB down to getBannerSize catches
// it, so it reaches the main looper as a fatal exception.
//
// The TEST adapter scenario of the same name returns an ad view containing a
// real androidx.compose.ui.platform.ComposeView, standing in for Moloco's
// creative. Combine with a detached container on the host side to reproduce.
//
// No rolling — a single immediate success is all that is needed.
export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "banner",
      ads: {
        "compose-detached-measure-crash": {
          adcode: "compose-detached-measure-crash",
          pubid: "",
          passback: "",
          adtype: "testtest-test-test-test-testtesttest",
          advidx: "a1b2c3d4-dead-beef-cafe-100000000002",
          areaidx: "compose-detached-measure-crash",
          adweight: "100",
          adv_price: "1",
          order: "1",
          width: "320",
          height: "50",
        },
      },
    }),
  };
};
