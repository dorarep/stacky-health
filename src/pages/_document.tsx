import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render () {
    return (
      <Html>
        <Head>
          <script async custom-element="amp-analytics" key="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <amp-analytics type="gtag" data-credentials="include">
            <script type="application/json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                vars: {
                  gtag_id: 'UA-110092791-3',
                  config: {
                    'UA-110092791-3': { groups: "default" }
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
