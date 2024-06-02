import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import kalturaConfig from "../../kalturaConfig";

export default function Document() {
  const scriptUrl = `https://cdnapisec.kaltura.com/p/2748741/embedPlaykitJs/uiconf_id/${kalturaConfig.uiConfId}`;

  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdnapisec.kaltura.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <Script src={scriptUrl} strategy={"beforeInteractive"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
