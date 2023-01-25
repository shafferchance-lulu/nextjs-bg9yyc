import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <Script
          src="https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js"
          async
          strategy="beforeInteractive"
        /> */}
        {/* <Script
          src="https://localdev.lululemon.com:9000/validation-configs/3.3.0/validation-configs-remoteEntry.js"
          strategy="beforeInteractive"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
