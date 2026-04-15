// Test CDN HTML for native ad scenarios.
// Mirrors the production `ortb-advanced-cdn-html.js` flow (bridge calls,
// onLoad/onFail postMessage) but redirects /bid fetches to ABSOLUTE
// BidmadTestServer URLs so the test path doesn't depend on diffusion.
//
// Routing: the bid endpoint is selected from `adInfo.zoneId`.
//   "native-icon-bottom-cta"   -> ortb-native-bid-icon-bottom-cta
//   "native-icon-right-cta"    -> ortb-native-bid-icon-right-cta
//   "native-image-only"        -> ortb-native-bid-image-only
//   "native-combined-top"      -> ortb-native-bid-combined-top
//   "native-combined-bottom"   -> ortb-native-bid-combined-bottom
//   "native-asset-fail"        -> ortb-native-bid-asset-fail
//
// The native rendering logic (NATIVE_LAYOUTS + renderNative) is duplicated
// from BidmadORTBAdapter/Resources/ortb_advanced_cdn.html so this test HTML
// stays self-contained. Keep them in sync when editing layout templates.
export const handler = async () => {
  const html = `<!DOCTYPE html>
<html style="margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;">
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    html, body { padding:0; margin:0; }
    #mainContainer { position:relative; width:100%; height:100%; display:flex; flex-direction:row; justify-content:center; align-items:center; }
    #adContainer { position:absolute; }
  </style>
</head>
<body>
<div id="mainContainer">
  <div id="adContainer" style="display:none;"></div>
</div>
<script>
  /* ── Logging ── */
  function sendLog(type) {
    var m = window._adMeta;
    if (!m) return;
    var params = new URLSearchParams({
      request_id: m.requestId, adid: m.adid,
      origin_area_idx: m.originAreaIdx, area_idx: m.areaIdx,
      domain: m.domain, net_idx: m.netIdx, net_name: m.netName,
      price: String(m.price)
    });
    fetch("/log/" + type + "?" + params.toString()).catch(function(){});
  }

  /* ── Visibility / click handlers (called by native SDK) ── */
  function onVisibilityChanged(isVisible, percentage) {
    if (!window._adMeta || window._adMeta.impressionSent) return;
    if (percentage >= 50) {
      sendLog("impression");
      window._adMeta.impressionSent = true;
    }
  }
  function onClickDetected(url) { sendLog("click"); }

  /* ── Native rendering (mirrors SDK HTML) ── */
  function escapeHtml(s) {
    if (s == null) return "";
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
  }

  var _NS = {
    link:  "display:block;width:100%;height:100%;text-decoration:none;color:#222;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fff;box-sizing:border-box;",
    icon:  "width:48px;height:48px;border-radius:8px;flex:0 0 48px;object-fit:cover;",
    title: "font-size:14px;font-weight:600;line-height:1.2;margin:0 0 2px 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;",
    desc:  "font-size:12px;font-weight:400;line-height:1.3;color:#555;margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;",
    cta:   "background:#1976d2;color:#fff;font-size:13px;font-weight:600;padding:8px 14px;border-radius:6px;text-align:center;white-space:nowrap;",
    image: "width:100%;display:block;object-fit:cover;",
  };

  var NATIVE_LAYOUTS = {
    icon_bottom_cta: function(a, url) {
      return "<a href=\\"" + escapeHtml(url) + "\\" style=\\"" + _NS.link + "padding:8px;display:flex;flex-direction:column;gap:8px;\\" data-testid=\\"native-root\\" data-layout=\\"icon_bottom_cta\\">"
        + "<div style=\\"display:flex;flex-direction:row;gap:8px;align-items:center;flex:1;min-height:0;\\">"
        +   "<img src=\\"" + escapeHtml(a.iconUrl) + "\\" style=\\"" + _NS.icon + "\\" data-testid=\\"native-icon\\" alt=\\"\\">"
        +   "<div style=\\"flex:1;min-width:0;\\">"
        +     "<div style=\\"" + _NS.title + "\\" data-testid=\\"native-title\\">" + escapeHtml(a.title) + "</div>"
        +     "<div style=\\"" + _NS.desc  + "\\" data-testid=\\"native-desc\\">"  + escapeHtml(a.description) + "</div>"
        +   "</div>"
        + "</div>"
        + "<div style=\\"" + _NS.cta + "\\" data-testid=\\"native-cta\\">" + escapeHtml(a.cta) + "</div>"
        + "</a>";
    },
    icon_right_cta: function(a, url) {
      return "<a href=\\"" + escapeHtml(url) + "\\" style=\\"" + _NS.link + "padding:8px;display:flex;flex-direction:row;gap:8px;align-items:center;\\" data-testid=\\"native-root\\" data-layout=\\"icon_right_cta\\">"
        + "<img src=\\"" + escapeHtml(a.iconUrl) + "\\" style=\\"" + _NS.icon + "\\" data-testid=\\"native-icon\\" alt=\\"\\">"
        + "<div style=\\"flex:1;min-width:0;\\">"
        +   "<div style=\\"" + _NS.title + "\\" data-testid=\\"native-title\\">" + escapeHtml(a.title) + "</div>"
        +   "<div style=\\"" + _NS.desc  + "\\" data-testid=\\"native-desc\\">"  + escapeHtml(a.description) + "</div>"
        + "</div>"
        + "<div style=\\"" + _NS.cta + "flex:0 0 auto;\\" data-testid=\\"native-cta\\">" + escapeHtml(a.cta) + "</div>"
        + "</a>";
    },
    image_only: function(a, url) {
      return "<a href=\\"" + escapeHtml(url) + "\\" style=\\"" + _NS.link + "\\" data-testid=\\"native-root\\" data-layout=\\"image_only\\">"
        + "<img src=\\"" + escapeHtml(a.imageUrl) + "\\" style=\\"" + _NS.image + "height:100%;\\" data-testid=\\"native-image\\" alt=\\"\\">"
        + "</a>";
    },
    combined_top_image: function(a, url) {
      return "<a href=\\"" + escapeHtml(url) + "\\" style=\\"" + _NS.link + "display:flex;flex-direction:column;\\" data-testid=\\"native-root\\" data-layout=\\"combined_top_image\\">"
        + "<img src=\\"" + escapeHtml(a.imageUrl) + "\\" style=\\"" + _NS.image + "flex:1;min-height:0;\\" data-testid=\\"native-image\\" alt=\\"\\">"
        + "<div style=\\"display:flex;flex-direction:row;gap:8px;align-items:center;padding:8px;flex:0 0 auto;\\">"
        +   "<img src=\\"" + escapeHtml(a.iconUrl) + "\\" style=\\"" + _NS.icon + "\\" data-testid=\\"native-icon\\" alt=\\"\\">"
        +   "<div style=\\"flex:1;min-width:0;\\">"
        +     "<div style=\\"" + _NS.title + "\\" data-testid=\\"native-title\\">" + escapeHtml(a.title) + "</div>"
        +     "<div style=\\"" + _NS.desc  + "\\" data-testid=\\"native-desc\\">"  + escapeHtml(a.description) + "</div>"
        +   "</div>"
        +   "<div style=\\"" + _NS.cta + "flex:0 0 auto;\\" data-testid=\\"native-cta\\">" + escapeHtml(a.cta) + "</div>"
        + "</div>"
        + "</a>";
    },
    combined_bottom_image: function(a, url) {
      return "<a href=\\"" + escapeHtml(url) + "\\" style=\\"" + _NS.link + "display:flex;flex-direction:column;\\" data-testid=\\"native-root\\" data-layout=\\"combined_bottom_image\\">"
        + "<div style=\\"display:flex;flex-direction:row;gap:8px;align-items:center;padding:8px;flex:0 0 auto;\\">"
        +   "<img src=\\"" + escapeHtml(a.iconUrl) + "\\" style=\\"" + _NS.icon + "\\" data-testid=\\"native-icon\\" alt=\\"\\">"
        +   "<div style=\\"flex:1;min-width:0;\\">"
        +     "<div style=\\"" + _NS.title + "\\" data-testid=\\"native-title\\">" + escapeHtml(a.title) + "</div>"
        +     "<div style=\\"" + _NS.desc  + "\\" data-testid=\\"native-desc\\">"  + escapeHtml(a.description) + "</div>"
        +   "</div>"
        +   "<div style=\\"" + _NS.cta + "flex:0 0 auto;\\" data-testid=\\"native-cta\\">" + escapeHtml(a.cta) + "</div>"
        + "</div>"
        + "<img src=\\"" + escapeHtml(a.imageUrl) + "\\" style=\\"" + _NS.image + "flex:1;min-height:0;\\" data-testid=\\"native-image\\" alt=\\"\\">"
        + "</a>";
    },
  };

  function renderNative(nativeData, width, height) {
    var template = NATIVE_LAYOUTS[nativeData.layout];
    if (!template) return Promise.reject(new Error("Unknown native layout: " + nativeData.layout));
    var assets = nativeData.assets || {};
    var clickUrl = (nativeData.link && nativeData.link.url) || "";
    var c = document.getElementById("adContainer");
    c.style.width = width + "px";
    c.style.height = height + "px";
    c.style.overflow = "hidden";
    c.style.display = "";
    c.innerHTML = template(assets, clickUrl);
    var imgs = c.querySelectorAll("img");
    if (imgs.length === 0) return Promise.resolve();
    return Promise.all(Array.from(imgs).map(function(img) {
      return img.decode().catch(function() {
        throw new Error("Asset load failed: " + img.getAttribute("src"));
      });
    }));
  }

  /* ── Platform detection ── */
  function getMobileOS() {
    var ua = navigator.userAgent || "";
    if (/android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
    return undefined;
  }

  /* ── Map zoneId to absolute test bid URL ── */
  var BID_BASE = "https://bidmad-test-server.netlify.app/.netlify/functions/";
  var ZONE_TO_BID = {
    "native-icon-bottom-cta":  BID_BASE + "ortb-native-bid-icon-bottom-cta",
    "native-icon-right-cta":   BID_BASE + "ortb-native-bid-icon-right-cta",
    "native-image-only":       BID_BASE + "ortb-native-bid-image-only",
    "native-combined-top":     BID_BASE + "ortb-native-bid-combined-top",
    "native-combined-bottom":  BID_BASE + "ortb-native-bid-combined-bottom",
    "native-asset-fail":       BID_BASE + "ortb-native-bid-asset-fail",
  };

  /* ── Main flow ── */
  (async function main() {
    try {
      var isAndroid = (getMobileOS() === "Android");

      /* 1-2. Device info (call bridge to keep flow realistic, but don't use the result) */
      if (isAndroid) {
        Android.getDeviceInfoWhitelist();
      } else {
        await NativeBridge.callNative("getDeviceInfoWhitelist");
      }

      /* 3. Get ad request info — zoneId selects the bid endpoint */
      var adInfo;
      if (isAndroid) {
        adInfo = JSON.parse(Android.getAdRequestInfo());
      } else {
        adInfo = await NativeBridge.callNative("getAdRequestInfo");
      }

      var bidUrl = ZONE_TO_BID[adInfo.zoneId];
      if (!bidUrl) throw new Error("No test bid mapping for zoneId=" + adInfo.zoneId);

      /* 4. Fetch bid (ABSOLUTE URL — bypasses baseURL) */
      var resp = await fetch(bidUrl);
      var data = await resp.json();

      /* 5. Parse */
      if (parseInt(data.statusCode) !== 200) throw new Error("Bad status: " + data.statusCode);
      if (!data.seatbid || !data.seatbid.length) throw new Error("Empty seatbid");
      var bid = data.seatbid[0].bid[0];
      var rawType = data.creativeType || data.vidoeType || "HTML";
      window._adType = (rawType === "NO_VAST") ? "HTML" : rawType;

      window._adMeta = {
        domain: data.domain || "",
        price: (bid.price !== undefined ? String(bid.price) : ""),
        netIdx: data.netIdx || "",
        netName: data.netName || "",
        requestId: adInfo.requestId,
        adid: "",
        originAreaIdx: adInfo.zoneId,
        areaIdx: adInfo.areaIdx,
        impressionSent: false
      };

      /* 6. Render — only NATIVE supported in this test HTML */
      if (window._adType !== "NATIVE") {
        throw new Error("Test HTML only supports NATIVE; got " + window._adType);
      }
      var nativeData = bid.ext && bid.ext.native;
      if (!nativeData) throw new Error("Empty native payload");
      await renderNative(nativeData, adInfo.width, adInfo.height);

      /* 7. Report success */
      if (isAndroid) Android.onLoad();
      else window.webkit.messageHandlers.onLoad.postMessage("");
    } catch (error) {
      var msg = (error && error.message) ? error.message : "Unknown error";
      if (getMobileOS() === "Android") Android.onFail(msg);
      else window.webkit.messageHandlers.onFail.postMessage(msg);
    }
  })();
</script>
</body>
</html>`;
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "ETag": '"ortb-native-html-v1"'
    },
    body: html
  };
};
