// import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";
// import kalturaConfig from "../../kalturaConfig";

import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

// export default function Document() {
//   const scriptUrl = `https://cdnapisec.kaltura.com/p/2748741/embedPlaykitJs/uiconf_id/${kalturaConfig.uiConfId}`;

//   return (
//     <Html lang="en">
//       <Head>
//         <link
//           href="https://cdnapisec.kaltura.com"
//           rel="preconnect"
//           crossOrigin="anonymous"
//         />
//         <Script src={scriptUrl} strategy={"beforeInteractive"} />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

export default function Document() {
  return (
    <Html>
      <Head>
        {/*IDX*/}
        <Script
          id={"dmpProviderUuid"}
          key={"dmpProviderUuid"}
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "const dmpProviderUuid = '41e37d4d-43fb-40d7-9762-8ae91252c1e2';",
          }}
        />
        <Script
          id={"IDX"}
          key={"IDX"}
          strategy="beforeInteractive"
          src={
            "https://tags.dxmdp.com/tags/41e37d4d-43fb-40d7-9762-8ae91252c1e2/dmp-provider.js"
          }
        />
        <Script
          key={"valuad"}
          id={"valuad"}
          strategy="beforeInteractive"
          data-publisher="13tv"
          // src={'/static/valuad.js'}
          dangerouslySetInnerHTML={{
            __html:
              "var _0x30ff=['13tv','appendChild','type','setAttribute','getItem','push','document','?timestamp=','top','now','data-publisher','script','_vadHb','createElement','vad_rollout','googletag','head','src','pubads','cmd','vad_timestamp','random','-prod.js','async'];(function(_0x42c8e1,_0x30ff4d){var _0x5a2f4b=function(_0x2ec88a){while(--_0x2ec88a){_0x42c8e1['push'](_0x42c8e1['shift']());}};_0x5a2f4b(++_0x30ff4d);}(_0x30ff,0x17c));var _0x5a2f=function(_0x42c8e1,_0x30ff4d){_0x42c8e1=_0x42c8e1-0x0;var _0x5a2f4b=_0x30ff[_0x42c8e1];return _0x5a2f4b;};(function(){function _0xfc9d85(){var _0x5bba01=_0x5a2f('0x4');var _0xa9ac7c='13tv';var _0x22599d='vad-hb-script';var _0x412eaf=Date[_0x5a2f('0xd')]();var _0x3c8910=window[_0x5a2f('0xc')][_0x5a2f('0xa')][_0x5a2f('0x11')](_0x5a2f('0xf'));_0x3c8910[_0x5a2f('0x6')]='text/javascript';_0x3c8910[_0x5a2f('0x7')](_0x5a2f('0xe'),_0x5bba01);_0x3c8910['id']=_0x22599d;_0x3c8910[_0x5a2f('0x3')]=!![];var _0x39a398=_0x412eaf-_0x412eaf%(0x15180*0x3e8);var _0x468950=parseInt(localStorage['getItem'](_0x5a2f('0x0')),0xa)||_0x39a398;_0x3c8910[_0x5a2f('0x15')]='//cdn.valuad.cloud/hb/'+_0xa9ac7c+_0x5a2f('0x2')+_0x5a2f('0xb')+(_0x39a398>_0x468950?_0x39a398:_0x468950);window[_0x5a2f('0xc')][_0x5a2f('0xa')][_0x5a2f('0x14')][_0x5a2f('0x5')](_0x3c8910);}function _0x2e2e36(){window[_0x5a2f('0x13')]=window[_0x5a2f('0x13')]||{'cmd':[]};var _0x3611fb=window[_0x5a2f('0x13')];_0x3611fb[_0x5a2f('0x17')]=_0x3611fb[_0x5a2f('0x17')]||[];if(_0x3611fb[_0x5a2f('0x17')]['splice']){_0x3611fb[_0x5a2f('0x17')]['splice'](0x0,0x0,function(){_0x3611fb[_0x5a2f('0x16')]()['disableInitialLoad']();});}else{_0x3611fb[_0x5a2f('0x17')][_0x5a2f('0x9')](function(){_0x3611fb[_0x5a2f('0x16')]()['disableInitialLoad']();});}}function _0x5a34b2(){window['googletag']=window[_0x5a2f('0x13')]||{'cmd':[]};var _0x30d9f9=window[_0x5a2f('0x13')];_0x30d9f9['cmd']['push'](function(){if(!window[_0x5a2f('0x10')]){_0x30d9f9[_0x5a2f('0x16')]()['refresh']();}});}var _0x5388d4=parseFloat(localStorage[_0x5a2f('0x8')](_0x5a2f('0x12')))||0x1;if(Math[_0x5a2f('0x1')]()<=_0x5388d4){_0x2e2e36();_0xfc9d85();setTimeout(function(){_0x5a34b2();},0xbb8);}}());",
          }}
        />
        {/*IDX END*/}
        <Script
          id={"doubleclick"}
          key={"doubleclick"}
          strategy="beforeInteractive"
          src={"https://securepubads.g.doubleclick.net/tag/js/gpt.js"}
        />
        <Script
          strategy="afterInteractive"
          key={"hostClassName"}
          id={"hostClassName"}
          dangerouslySetInnerHTML={{
            __html: `
              const hostClassName = /reshet/i.test(navigator.userAgent) ? 'nativeApp' : 'browser';
              document.body.classList.add(hostClassName);
              if(hostClassName === 'nativeApp'){
                document.body.classList.add(navigator.userAgent.includes('reshet_android') ? 'android' : 'ios');
              }
              `,
          }}
        />
        <Script
          strategy="beforeInteractive"
          id={"GoogleTagManager"}
          key={"GoogleTagManager"}
          dangerouslySetInnerHTML={{
            __html: `
                        // Google Tag Manager
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${"GTM-W6ZR3W"}');
                        // End Google Tag Manager
                    `,
          }}
        />
        <Script
          strategy="beforeInteractive"
          key={"googleAnalyticsScript"}
          id={"googleAnalyticsScript"}
          src={`https://www.googletagmanager.com/gtag/js?id=UA-985873-3`}
        />
        <Script
          strategy="beforeInteractive"
          key={"googleAnalytics"}
          id={"googleAnalytics"}
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-985873-3');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
