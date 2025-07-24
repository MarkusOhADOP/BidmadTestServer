export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      data: {
        media: {
          media_key: "10166",
          interval: 3600,
          bundle_interval: 0,
          bundle: "960571015",
          bg_req_yn: 0,
          error_send_yn: 0,
          debug_yn: 0,
        },
        adunits: [
          {
            adunit_id: 102468,
            adformat: "banner",
            width: 320,
            height: 50,
            fullscreen: 0,
            interval: 0,
            freq_use: 0,
            freq_cycle_type: "M",
            freq_interval: 0,
            close_btn_delay: 0,
            video: { type: 0, placement: 3 },
            network_req_type: 1,
            house_ads_use: 1,
            networks: [
              { id: 1, uid: 1, name: "AdMixer", priority: 1, portion: 0 },
              {
                id: 2,
                uid: 2,
                name: "GoogleAdManager360",
                key: '[{"adunit_code": "/23086310286,23306777337/ca-mb-app-pub-3018576306493266-inapp-banner/102468_2"}]',
                priority: 2,
                portion: 0,
              },
            ],
          },
        ],
        ads: {
          dsp_id: 2,
          dsp_name: "Adpacker",
          adm: '<div style="display:block;margin-left:auto; margin-right:auto;width:100%;height:50px;"><div style="position:absolute;width:100%;height:50px;z-index:999;overflow:hidden;" onclick="new Image().src=\'https://amssp.admixer.co.kr/api/v1/mad/click?media_key=10166&adunit_id=102468&req_id=20250724142502-10fcac&imp_id=20250724142503666750-102468-2-MTIxLjY2LjU2LjJfNjVDMDM2QUYtM0Y0RC00RUJDLTg3OTgtNzc1QzQ0RTlFRkUy&platform=ios&os=ios&osv=18.5&sdkv=1.0.7&lang=en-KR&model=iPhone+15+Pro+Max&network=3G&ifa=65C036AF-3F4D-4EBC-8798-775C44E9EFE2&ifa_use=1&r=1753334703666&aucp=zW8wDAfIrzG1s8aL3fKG6D_Z1JMnvtT-jZsqSaN8A0eUZHuNarLVqhMoCYoPo_Tz2yignvafjT9sr0chB8KdBexSHZS6WWY3PYWAsLL4GxYBQMcYM-X7YQ9PLm2I6oHOWmoNsF60o6ebW85aaby1U2wvXEjJJduD1M2xouDrFx81iEYI30DOQXBqkQk7MRSFv2lwBFhftj9FgwpqFD02kD-o0iX5Jko8S33CG75Vq0Y%3D&aucpv=1\';"><!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Dynamic Ad</title>\n</head>\n<body>\n<div id="container"></div>\n<script src="https://scr.nsmartad.com/nbridge/creative/js/dynamic.js"></script>\n<script>\n            new nbridge_dynamic({\n                       "ad_type"             : "search",\n                       "channel_cd"          : "103393SA",\n                       "display_creative_yn" : "y",\n                       "display_id"          : "container",\n                       "keyword"         : "ì„ í’ê¸°",\n                       "width"               : "100%",\n                       "height"              : "50",\n                         "close_button_display": "y",\n                         "action_position":"right",\n                       "sub_param"           : "ssp_sub1=aid%3D212839%26pid%3D32842310%26udid%3D65C036AF-3F4D-4EBC-8798-775C44E9EFE2%26rtb_type%3D1&ssp_click_id=20250724142502883317022459&nbr_gaid=&nbr_idfa=65C036AF-3F4D-4EBC-8798-775C44E9EFE2&nbr_sub_media=group15&ssp_sub2=33872&ssp_pub_bundle=32842310",\n                       "ext_click_url"         : "https://adp.admixer.co.kr/click?adpdata=TAPDO4wpkCE06KxGA20abzfx4eL6q-YuaKIB8KiyXP9gj9uO7DpjK7vDjASIrkfvDabMwFhhSRN3sTdwqVRkMesTGDARvWqRhZPJwhIIF82B3f_D2Kn0CpI5nmyuqzt6YhlsRgopJEBvdoG78hV0-R6XN7lnOX0HKLflRWICO343z0KY_5R2t2u0CIl6lO1wDsZ5bVx9pHYpH9y3jAd1LkW7hFdx9TNnE_OX7NaokCUez1w8CzZG1ZDtSkIYwO5YujvzHXBuk-OO1y8fXLjucDvDk0IHsmD8eZHBu8ua89gbx1GIZiv1aUn1YdhRkeYyTSmzjf3OgPgCtboJfZMnqG8OTPglxS6iegijVyIXvTlcV7ZaIBAVPNBmD6MqnG5zWuzalr0SRwVy8FGJF4_D2ka6E89stuVf5lo12OwvALDtSWQTqShQQqfBg1Ys1lYi0rUoXT9uyXoD1V-AtUeoEchOb0IvlKD5Sx3aQvVIQ2P9lshSMLMCDtynjmM5XBXNueLSnygll1GCiUKAGAFozSsjijNrO7GIHOdGMOI1edOzyO9U9uOQVRkDynDrHjQJkJmMDHT7zV6-GsOTFeVKoFpeuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG--1ryc4niUpPY8DHpbVzu6U.&r=1753334702",\n            });\n</script>\n</body><script type="text/javascript">oData = {"sdk":1,"sdk_version":"1.0.7","module_version":0.500,"goods_cd":"SCRIPT","size_cd":"320X50","log_delay":0,"width":320,"height":50,"ssp_click":"","wm_use_yn":"y","wm_area":"left","resolution_yn":"n","interstitial":0,"data":[{"ads_id":212839,"creative":"","creative2":"","width":320,"height":50,"cl":"(null)","beacon":"https://adp.admixer.co.kr/beacon?adpdata=TAPDO4wpkCE06KxGA20abzfx4eL6q-YuaKIB8KiyXP9gj9uO7DpjK7vDjASIrkfvDabMwFhhSRN3sTdwqVRkMesTGDARvWqRhZPJwhIIF82B3f_D2Kn0CpI5nmyuqzt6YhlsRgopJEBvdoG78hV0-R6XN7lnOX0HKLflRWICO343z0KY_5R2t2u0CIl6lO1wDsZ5bVx9pHYpH9y3jAd1LkW7hFdx9TNnE_OX7NaokCUez1w8CzZG1ZDtSkIYwO5YujvzHXBuk-OO1y8fXLjucDvDk0IHsmD8eZHBu8ua89jyZMe5Gr3Lg35sHwYGj7zxHYbM_vSCiYmkxLjPVQ7rmD2zFIMlzpaST1I8H6p9JzFxC8IGevNlWdXa0tsPMlPAImtY6MEbnBZUIzg8mnViUwcAtHQEbmn1TSoYRhCs8Q-X3yDT9elaDnYVyq_60mk1STllBimb1okL5IcH7yxh4DQAA-vSXFcuc8Y8FSEzu7f5XI2gmb_RuVNRt1_yH6Y78I1L4ytQVwAJjlofxtkBDgPZO5Y6-r9m1Sj9dFv8qZFx0vtfWNwRTvTskSVXzHiZs8jvVPbjkFUZA8pw6x40CZCZjAx0-81evhrDkxXlSqBaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG--1ryc4niUpPY8DHpbVzu6U.&bpri=0.158696","click":"https://adp.admixer.co.kr/click?adpdata=TAPDO4wpkCE06KxGA20abzfx4eL6q-YuaKIB8KiyXP9gj9uO7DpjK7vDjASIrkfvDabMwFhhSRN3sTdwqVRkMesTGDARvWqRhZPJwhIIF82B3f_D2Kn0CpI5nmyuqzt6YhlsRgopJEBvdoG78hV0-R6XN7lnOX0HKLflRWICO343z0KY_5R2t2u0CIl6lO1wDsZ5bVx9pHYpH9y3jAd1LkW7hFdx9TNnE_OX7NaokCUez1w8CzZG1ZDtSkIYwO5YujvzHXBuk-OO1y8fXLjucDvDk0IHsmD8eZHBu8ua89gbx1GIZiv1aUn1YdhRkeYyTSmzjf3OgPgCtboJfZMnqG8OTPglxS6iegijVyIXvTlcV7ZaIBAVPNBmD6MqnG5zWuzalr0SRwVy8FGJF4_D2ka6E89stuVf5lo12OwvALDtSWQTqShQQqfBg1Ys1lYi0rUoXT9uyXoD1V-AtUeoEchOb0IvlKD5Sx3aQvVIQ2P9lshSMLMCDtynjmM5XBXNueLSnygll1GCiUKAGAFozSsjijNrO7GIHOdGMOI1edOzyO9U9uOQVRkDynDrHjQJkJmMDHT7zV6-GsOTFeVKoFpeuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG-1peuGWEbhkfzxuuOVVjhvtaXrhlhG4ZH88brjlVY4b7Wl64ZYRuGR_PG645VWOG--1ryc4niUpPY8DHpbVzu6U.&r=1753334702"}]};</script>\r\n<script type="text/javascript" src="https://cdnet.nasmob.com/adpacker/js/ap_play_v1.1.js"></script></div><img src="https://amssp.admixer.co.kr/api/v1/mad/imp?media_key=10166&adunit_id=102468&req_id=20250724142502-10fcac&imp_id=20250724142503666750-102468-2-MTIxLjY2LjU2LjJfNjVDMDM2QUYtM0Y0RC00RUJDLTg3OTgtNzc1QzQ0RTlFRkUy&platform=ios&os=ios&osv=18.5&sdkv=1.0.7&lang=en-KR&model=iPhone+15+Pro+Max&network=3G&ifa=65C036AF-3F4D-4EBC-8798-775C44E9EFE2&ifa_use=1&r=1753334703666&au_sswp=0.126957&aucp=zW8wDAfIrzG1s8aL3fKG6D_Z1JMnvtT-jZsqSaN8A0eUZHuNarLVqhMoCYoPo_Tz2yignvafjT9sr0chB8KdBexSHZS6WWY3PYWAsLL4GxYBQMcYM-X7YQ9PLm2I6oHOWmoNsF60o6ebW85aaby1U2wvXEjJJduD1M2xouDrFx81iEYI30DOQXBqkQk7MRSFv2lwBFhftj9FgwpqFD02kD-o0iX5Jko8S33CG75Vq0Y%3D&aucpv=1" style="width:0px;height:0px;border:0px;"></div>',
        },
      },
    }),
  };
};
