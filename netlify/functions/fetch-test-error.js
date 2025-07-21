export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      command: "ok",
      isFBB: "N",
      status: "200",
      type: "v",
      ads: {
        "": {
          adcode:
            '<div style="text-align:center;">\r\n      <!-- #ADOP Area Mfresh  BEGIN CRITEO CDB -->\r\n        <script async="async" type="text/javascript" src="https://static.criteo.net/js/ld/publishertag.js"></script>\r\n        <div id="criteo_slot_1686513"></div>\r\n        <script>\r\n            var processCdbBid;\r\n            var criteoTime=0;\r\n            var intervelTime = 30;\r\n            var isRefreshed = false;\r\n            var CriteoAdUnits;\r\n            var count = 0;\r\n            var countLimit = 5;\r\n            var startCriteoAd = function () {\r\n                /* CONFIG CRITEO ZONE ID, SLOT DIV ID, PASSBACK */\r\n                var criteoZoneId = 1686513;\r\n                var criteoSlotId = "criteo_slot_1686513";\r\n                var passback = function () {\r\n                    var width = "300px", height = "250px";var div = document.getElementById(criteoSlotId);if (div) { var ifr = document.createElement("iframe");ifr.setAttribute("id", criteoSlotId+"_iframe"), ifr.setAttribute("frameborder","0"), ifr.setAttribute("allowtransparency","true"), ifr.setAttribute("hspace","0"), ifr.setAttribute("marginwidth","0"), ifr.setAttribute("marginheight","0"), ifr.setAttribute("scrolling","no"), ifr.setAttribute("vspace","0"), ifr.setAttribute("width", width), ifr.setAttribute("height", height); div.appendChild(ifr);var htmlcode = "<html><head></head><body><script src=\'//compass.adop.cc/assets/js/adop/adop.js?v=14\'></scr"+"ipt><ins class=\'adsbyadop\' _adop_zon = \'7aca215f-8a21-4167-a69b-adfc4fa5a710\' _adop_type = \'js\' style=\'display:inline-block;width:300px;height:250px;\' _page_url=\'\'></ins></body></html>";var ifrd = ifr.contentWindow.document; ifrd.open(); ifrd.write(htmlcode); ifrd.close(); }\r\n                   \r\n                }\r\n                CriteoAdUnits = {"placements": [{"slotid": criteoSlotId, "zoneid": criteoZoneId}]};\r\n                window.Criteo = window.Criteo || {};\r\n                window.Criteo.events = window.Criteo.events || [];\r\n                processCdbBid = function () {\r\n                    var bids = Criteo.GetBidsForAdUnit(criteoSlotId);\r\n                    if (bids.length > 0) {\r\n                        var bidFound = bids[0];\r\n                        Criteo.RenderAd({bidId: bidFound.id, containerId: bidFound.impressionId});\r\n                        console.log("draw criteo AD");\r\n                        if(document.getElementById(criteoSlotId+"_iframe") != null){\r\n                            document.getElementById(criteoSlotId+"_iframe").remove();\r\n                            console.log("criteo AD refreshed!");\r\n                        }else{\r\n                        }\r\n                    } else {\r\n                        console.log("no criteo ad");\r\n                        if (!isRefreshed){\r\n                            passback();\r\n                        }else{\r\n                        }\r\n                    }\r\n                };\r\n                Criteo.events.push(function () {\r\n                    Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);\r\n                    setInterval(criteoTimeTracker, 1000);\r\n                });\r\n            };\r\n            var criteoTimeTracker = function(){\r\n                if ( criteoTime >= intervelTime){\r\n                    criteoTime = 0;\r\n                    criteoRefresh();\r\n                }\r\n                criteoTime++;\r\n            }\r\n            var criteoRefresh = function() {\r\n                if (count >= countLimit){\r\n                    return;\r\n                }\r\n                isRefreshed = true;\r\n                Criteo.events.push(function() { Criteo.RequestBids(CriteoAdUnits, processCdbBid, 2000);});\r\n                count++;\r\n            }\r\n            startCriteoAd();\r\n        </script>\r\n\r\n        <!-- END CRITEO CDB -->\r\n      </div>\r\n',
          pubid: "",
          passback:
            "https://compass.adop.cc/RD/7aca215f-8a21-4167-a69b-adfc4fa5a710",
          adtype: "b07341be-50ba-4710-975c-af033f0abf51",
          advidx: "244e8077-97d7-4614-ae92-ba5c0c477790",
          areaidx: "",
          adweight: "100",
          adv_price: "0",
          order: "3",
          width: "300",
          height: "250",
        },
      },
    }),
  };
};
