import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import ssgConfig from "../../amdxg.config";

export default class extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
          <script async custom-element="amp-analytics" key="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <amp-analytics type="gtag" data-credentials="include">
            <script type="application/json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                vars: {
                  gtag_id: ssgConfig.gtag,
                  config: {
                    [ssgConfig.gtag]: { groups: "default" }
                  }
                }
              })
            }}>
            </script>
          </amp-analytics>
        </body>
      </Html>
    )
  }
}
