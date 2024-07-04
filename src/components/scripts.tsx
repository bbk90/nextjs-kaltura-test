"use client";

import Script from "next/script";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import kalturaConfig from "../../kalturaConfig";

export const Scripts = () => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    setIsWindow(typeof window !== "undefined");
  }, []);

  return (
    <>
      {/* {Object.entries(page?.SEO?.schema || {}).map((el) => {
        if (typeof el[1] == "object") {
          return (
            <Script
              id="asdasd"
              strategy="beforeInteractive"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(el[1]),
              }}
              key={`schema-${el[0]}`}
            />
          );
        }
      })} */}

      <Script
        key={"GooglePal"}
        strategy={"afterInteractive"}
        src={"https://imasdk.googleapis.com/pal/sdkloader/pal.js"}
      />
      <Script
        key={"ima3"}
        strategy={"afterInteractive"}
        src={"http://imasdk.googleapis.com/js/sdkloader/ima3.js"}
      />
      {/* <TaboolaLoader key={"TaboolaLoader"} /> */}
      <Script
        key={"KalturaPlayer"}
        strategy={"beforeInteractive"}
        src={`https://cdnapisec.kaltura.com/p/2748741/embedPlaykitJs/uiconf_id/${kalturaConfig.uiConfId}`}
      />
      {isWindow ? (
        <Script
          key={"accessibility"}
          strategy={"afterInteractive"}
          src={"/cdn/accessibility/accessibility_source.js"}
          id={"accessibilityIncSource"}
          data-username={"iav2b023"}
          data-version={"5"}
          data-source="package"
          data-language={"he"}
        />
      ) : null}
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-W6ZR3W' height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      {/* End Google Tag Manager (noscript) */}
      <Script
        src={`https://admin.heyday.io/cstmst/heyDayMain.js?affId=2470&d=${
          process.env.HEY_DAY_SEARCH_SOURCE || "13tv.co.il"
        }`}
        async
        key={"heyDay"}
        id={"heyDay"}
        type={"text/javascript"}
        strategy={"beforeInteractive"}
      />
    </>
  );
};
