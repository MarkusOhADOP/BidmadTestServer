export const handler = async () => {
  const html = `<!DOCTYPE html>
<html style="margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;">
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    html, body {
      padding: 0;
      margin: 0;
    }
    #mainContainer {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    #adContainer {
      position: absolute;
    }
    #lastFrame {
      background-color: rgb(0, 0, 0);
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      display: none;
    }
    #dim {
      position: absolute;
      background-color: rgba(0,0,0,0.5);
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      display: none;
    }
    #ic_replay {
      z-index: 1;
      display: none;
    }
    #ic_sound_on, #ic_sound_off {
      position: absolute;
      left: 5px;
      bottom: 24px;
      display: none;
    }
    .videoAdUiBottomBar {
      display: none !important;
    }
  </style>
</head>
<body>
<div id="mainContainer">
  <div id="adContainer" style="display:none;">
    <div id="ic_sound_off" onclick="toggleSound(true)">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>
    </div>
    <div id="ic_sound_on" onclick="toggleSound(false)">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
    </div>
  </div>
  <video id="lastFrame" webkit-playsinline="true" playsinline="true"></video>
  <div id="dim"></div>
  <div id="ic_replay">
    <svg xmlns="http://www.w3.org/2000/svg" onclick="replayAd()" height="72px" viewBox="0 -960 960 960" width="72px" fill="#e8eaed"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
  </div>
</div>
<script>
  /* ── Utility ── */
  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  /* ── Logging ── */
  function sendLog(type) {
    var m = window._adMeta;
    if (!m) {
      console.log("[ORTB-E2E][JS][Log] sendLog(" + type + ") skipped — no _adMeta");
      return;
    }
    var params = new URLSearchParams({
      request_id: m.requestId,
      adid: m.adid,
      origin_area_idx: m.originAreaIdx,
      area_idx: m.areaIdx,
      domain: m.domain,
      net_idx: m.netIdx,
      net_name: m.netName,
      price: String(m.price)
    });
    var url = "/log/" + type + "?" + params.toString();
    console.log("[ORTB-E2E][JS][Log] sendLog(" + type + ") -> " + url);
    fetch(url).catch(function(e){ console.log("[ORTB-E2E][JS][Log] fetch error: " + e); });
  }

  /* ── Visibility handler (called by native SDK every ~0.3s) ── */
  function onVisibilityChanged(isVisible, percentage) {
    if (!window._adMeta) return;
    if (!window._adMeta.impressionSent) {
      var shouldImpress = (window._adType === "VAST") ? isVisible : (percentage >= 50);
      if (shouldImpress) {
        console.log("[ORTB-E2E][JS][Vis] Impression triggered — type=" + window._adType + " visible=" + isVisible + " pct=" + percentage);
        sendLog("impression");
        window._adMeta.impressionSent = true;
      }
    }
    if (window._vastAdsManager) {
      try {
        if (isVisible) {
          window._vastAdsManager.resume();
        } else {
          window._vastAdsManager.pause();
        }
      } catch(e) {}
    }
  }

  /* ── Click handler (called by native SDK on tap) ── */
  function onClickDetected(url) {
    console.log("[ORTB-E2E][JS][Click] onClickDetected: " + url);
    sendLog("click");
  }

  /* ── Script (NO_VAST) rendering ── */
  function renderScript(adm, width, height) {
    console.log("[ORTB-E2E][JS][Render] renderScript: " + width + "x" + height + " adm_length=" + adm.length);
    var c = document.getElementById("adContainer");
    c.style.width = width + "px";
    c.style.height = height + "px";
    c.style.display = "";
    c.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;'>" + adm + "</div>";
    console.log("[ORTB-E2E][JS][Render] renderScript complete — adContainer visible");
  }

  /* ── Native rendering (mirrors BidmadORTBAdapter/Resources/ortb_advanced_cdn.html) ── */
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
    console.log("[ORTB-E2E][JS][Render] renderNative: layout=" + nativeData.layout + " " + width + "x" + height);
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

  /* ── VAST rendering ── */
  var _vastResponse;
  var _vastAdDuration;
  var _vastPrevSoundVolume;

  async function renderVAST(adm, width, height) {
    console.log("[ORTB-E2E][JS][Render] renderVAST: " + width + "x" + height + " adm_length=" + adm.length);
    window._vastAdWidth = width;
    window._vastAdHeight = height;

    console.log("[ORTB-E2E][JS][Render] loading IMA SDK...");
    await loadScript("https://imasdk.googleapis.com/js/sdkloader/ima3.js");
    console.log("[ORTB-E2E][JS][Render] IMA SDK loaded");

    _vastResponse = adm;
    initializeAdsManager(adm);
  }

  function initializeAdsManager(vastResponse) {
    console.log("[ORTB-E2E][JS][VAST] initializeAdsManager");
    var adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById("adContainer")
    );

    var adsLoader = new google.ima.AdsLoader(adDisplayContainer);
    adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      function(event) { onAdsManagerLoaded(event, adDisplayContainer); },
      false
    );
    adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError,
      false
    );

    var adsRequest = new google.ima.AdsRequest();
    adsRequest.adsResponse = vastResponse;
    adsLoader.requestAds(adsRequest);
  }

  function onAdsManagerLoaded(event, adDisplayContainer) {
    console.log("[ORTB-E2E][JS][VAST] onAdsManagerLoaded");
    try {
      adDisplayContainer.initialize();
      var adsManager = event.getAdsManager();
      window._vastAdsManager = adsManager;

      adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdStarted);
      adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdComplete);
      adsManager.addEventListener(google.ima.AdEvent.Type.VIDEO_CLICKED, onAdVideoClick);
      adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, onAdResume);
      adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, onAdPause);
      adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

      adsManager.init(window._vastAdWidth, window._vastAdHeight, google.ima.ViewMode.NORMAL);

      setTimeout(function() {
        toggleSound(false);
        adsManager.start();
        console.log("[ORTB-E2E][JS][VAST] adsManager.start() called");
      }, 100);

      /* signal load success — this is resolved by the main() promise chain */
      if (window._vastLoadResolve) window._vastLoadResolve();
    } catch(error) {
      console.log("[ORTB-E2E][JS][VAST] onAdsManagerLoaded error: " + error.message);
      if (window._vastLoadReject) {
        window._vastLoadReject(new Error("IMA Load Fail"));
      }
    }
  }

  function onAdStarted() {
    console.log("[ORTB-E2E][JS][VAST] onAdStarted");
    var mgr = window._vastAdsManager;
    mgr.pause();

    _vastAdDuration = mgr.getCurrentAd().getDuration();
    console.log("[ORTB-E2E][JS][VAST] ad duration=" + _vastAdDuration + "s");

    var container = document.getElementById("adContainer");
    container.style.width = window._vastAdWidth + "px";
    container.style.height = window._vastAdHeight + "px";
    container.style.display = "";

    setAdLastFrame();

    setTimeout(function() {
      resetAdLastFrame();
    }, 200);
  }

  function onAdComplete() {
    console.log("[ORTB-E2E][JS][VAST] onAdComplete");
    showLastFrame();
  }

  function onAdError(error) {
    console.log("[ORTB-E2E][JS][VAST] onAdError: " + (error.getError ? error.getError().getMessage() : error));
    if (window._vastLoadReject) {
      window._vastLoadReject(new Error("IMA Error"));
      window._vastLoadReject = null;
    } else {
      /* post-load error — inform native */
      if (getMobileOS() === "Android") {
        Android.onFail("IMA Error");
      } else {
        window.webkit.messageHandlers.onFail.postMessage("IMA Error");
      }
    }
  }

  function onAdPause() {
    console.log("[ORTB-E2E][JS][VAST] onAdPause");
    autoSoundControll("Pause");
  }

  function onAdResume() {
    console.log("[ORTB-E2E][JS][VAST] onAdResume");
    autoSoundControll("Resume");
  }

  function onAdVideoClick() {
    var mgr = window._vastAdsManager;
    var url = mgr.getCurrentAd().data.clickThroughUrl;
    console.log("[ORTB-E2E][JS][VAST] onAdVideoClick: " + url);
    // Click log is handled by native onClickDetected (triggered by window.open)
    window.open(url, "_blank");
  }

  function toggleSound(isOn) {
    var mgr = window._vastAdsManager;
    if (!mgr) return;
    if (isOn) {
      mgr.setVolume(1);
      document.getElementById("ic_sound_on").style.display = "block";
      document.getElementById("ic_sound_off").style.display = "none";
    } else {
      mgr.setVolume(0);
      document.getElementById("ic_sound_on").style.display = "none";
      document.getElementById("ic_sound_off").style.display = "block";
    }
    _vastPrevSoundVolume = undefined;
  }

  function autoSoundControll(type) {
    var mgr = window._vastAdsManager;
    if (!mgr) return;
    switch(type) {
      case "Pause":
        _vastPrevSoundVolume = mgr.getVolume();
        mgr.setVolume(0);
        break;
      case "Resume":
        if (_vastPrevSoundVolume !== undefined) {
          mgr.setVolume(_vastPrevSoundVolume);
        }
        _vastPrevSoundVolume = undefined;
        break;
    }
  }

  function setAdLastFrame() {
    var adOriVideo = document.getElementsByTagName("video")[0];
    var lastFrame = document.getElementById("lastFrame");
    if (lastFrame.readyState !== 4) {
      lastFrame.src = adOriVideo.currentSrc;
      lastFrame.load();
    }
    lastFrame.currentTime = _vastAdDuration;
  }

  function showLastFrame() {
    document.getElementById("lastFrame").style.display = "block";
    document.getElementById("dim").style.display = "block";
    document.getElementById("ic_replay").style.display = "block";
  }

  function resetAdLastFrame() {
    document.getElementById("lastFrame").style.display = "none";
    document.getElementById("dim").style.display = "none";
    document.getElementById("ic_replay").style.display = "none";
  }

  function replayAd() {
    console.log("[ORTB-E2E][JS][VAST] replayAd");
    resetAdLastFrame();
    initializeAdsManager(_vastResponse);
  }

  /* ── Platform detection ── */
  function getMobileOS() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
    return undefined;
  }

  /* ── Main flow ── */
  (async function main() {
    try {
      var platform = getMobileOS();
      var isAndroid = (platform === "Android");
      console.log("[ORTB-E2E][JS] main() started — platform=" + platform + " ua=" + navigator.userAgent);

      /* 1. Get device info whitelist */
      console.log("[ORTB-E2E][JS] Step 1: getDeviceInfoWhitelist...");
      var whitelist;
      if (isAndroid) {
        var raw = Android.getDeviceInfoWhitelist();
        console.log("[ORTB-E2E][JS] Step 1 raw whitelist: " + raw);
        whitelist = JSON.parse(raw);
      } else {
        whitelist = await NativeBridge.callNative("getDeviceInfoWhitelist");
      }
      var whitelistKeys = Object.keys(whitelist);
      var enabledCount = whitelistKeys.filter(function(k) { return whitelist[k]; }).length;
      console.log("[ORTB-E2E][JS] Step 1 done: " + whitelistKeys.length + " total fields, " + enabledCount + " enabled");

      /* 2. Batch get device info for enabled fields */
      var enabledFields = Object.entries(whitelist)
        .filter(function(entry) { return entry[1]; })
        .map(function(entry) { return entry[0]; });
      console.log("[ORTB-E2E][JS] Step 2: getDeviceInfo for " + enabledFields.length + " fields: [" + enabledFields.join(", ") + "]");
      var device;
      if (isAndroid) {
        var rawDevice = Android.getDeviceInfo(JSON.stringify(enabledFields));
        console.log("[ORTB-E2E][JS] Step 2 raw device: " + rawDevice);
        device = JSON.parse(rawDevice);
      } else {
        device = await NativeBridge.callNative("getDeviceInfo", { fields: enabledFields });
      }
      console.log("[ORTB-E2E][JS] Step 2 done: " + Object.keys(device).length + " device keys: [" + Object.keys(device).join(", ") + "]");

      /* 3. Get ad request info */
      console.log("[ORTB-E2E][JS] Step 3: getAdRequestInfo...");
      var adInfo;
      if (isAndroid) {
        var rawInfo = Android.getAdRequestInfo();
        console.log("[ORTB-E2E][JS] Step 3 raw adInfo: " + rawInfo);
        adInfo = JSON.parse(rawInfo);
      } else {
        adInfo = await NativeBridge.callNative("getAdRequestInfo");
      }
      console.log("[ORTB-E2E][JS] Step 3 done: zoneId=" + adInfo.zoneId + " areaIdx=" + adInfo.areaIdx + " size=" + adInfo.width + "x" + adInfo.height + " bidfloor=" + adInfo.bidfloor + " type=" + adInfo.type);

      /* 4. POST /bid/{zoneId} */
      var body = {
        appId: adInfo.appId,
        type: adInfo.type,
        requestId: adInfo.requestId,
        areaIdx: adInfo.areaIdx,
        width: adInfo.width,
        height: adInfo.height,
        bidfloor: adInfo.bidfloor,
        device: device
      };
      // TODO: Revert to "/bid/" + adInfo.zoneId after testing
      var bidPath = "/bid/" + adInfo.zoneId + "/test";
      console.log("[ORTB-E2E][JS] Step 4: POST " + bidPath + " body=" + JSON.stringify(body).substring(0, 500));
      var resp = await fetch(bidPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log("[ORTB-E2E][JS] Step 4 HTTP status=" + resp.status);
      var data = await resp.json();
      console.log("[ORTB-E2E][JS] Step 4 done: statusCode=" + data.statusCode + " videoType=" + data.videoType + " vidoeType=" + data.vidoeType + " seatbid_count=" + (data.seatbid ? data.seatbid.length : 0));

      /* 5. Parse response */
      var statusCode = data.statusCode;
      if (parseInt(statusCode) !== 200) throw new Error("Bad status: " + statusCode);
      if (!data.seatbid || !data.seatbid.length) throw new Error("Empty seatbid");
      var bid = data.seatbid[0].bid[0];

      /* creativeType (preferred) takes precedence over vidoeType (legacy, typo
         preserved). Map "NO_VAST" -> "HTML" for canonical naming. */
      var rawType = data.creativeType || data.vidoeType || data.videoType || "HTML";
      window._adType = (rawType === "NO_VAST") ? "HTML" : rawType;

      /* Store metadata for logging */
      window._adMeta = {
        domain: data.domain || "",
        price: (bid.price !== undefined ? String(bid.price) : ""),
        netIdx: data.netIdx || "",
        netName: data.netName || "",
        requestId: adInfo.requestId,
        adid: device.ifa || "",
        originAreaIdx: adInfo.zoneId,
        areaIdx: adInfo.areaIdx,
        impressionSent: false
      };
      console.log("[ORTB-E2E][JS] _adMeta set: " + JSON.stringify(window._adMeta));
      console.log("[ORTB-E2E][JS] _adType=" + window._adType);

      /* 6. Render based on type */
      console.log("[ORTB-E2E][JS] Step 6: rendering type=" + window._adType);
      if (window._adType === "VAST") {
        var vastAdm = bid.adm;
        if (!vastAdm) throw new Error("Empty adm");
        /* wrap renderVAST in a promise that resolves when IMA is loaded */
        await new Promise(function(resolve, reject) {
          window._vastLoadResolve = resolve;
          window._vastLoadReject = reject;
          renderVAST(vastAdm, adInfo.width, adInfo.height).catch(reject);
        });
      } else if (window._adType === "NATIVE") {
        var nativeData = bid.ext && bid.ext.native;
        if (!nativeData) throw new Error("Empty native payload");
        await renderNative(nativeData, adInfo.width, adInfo.height);
      } else {
        var htmlAdm = bid.adm;
        if (!htmlAdm) throw new Error("Empty adm");
        renderScript(htmlAdm, adInfo.width, adInfo.height);
      }

      /* 7. Report success */
      console.log("[ORTB-E2E][JS] Step 7: SUCCESS — posting onLoad to native (platform=" + platform + ")");
      if (isAndroid) {
        Android.onLoad();
      } else {
        window.webkit.messageHandlers.onLoad.postMessage("");
      }
    } catch (error) {
      var msg = error.message || "Unknown error";
      console.log("[ORTB-E2E][JS] FAILED: " + msg + " stack=" + (error.stack || "n/a"));
      if (getMobileOS() === "Android") {
        Android.onFail(msg);
      } else {
        window.webkit.messageHandlers.onFail.postMessage(msg);
      }
    }
  })();
</script>
</body>
</html>
`;
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "ETag": '"ortb-advanced-v7-native"'
    },
    body: html
  };
};
