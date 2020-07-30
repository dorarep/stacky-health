import React from "react";
import Document, { Main, NextScript } from 'next/document'
import {AmpAnalytics} from "../components/amp/AmpAnalytics";

export default class extends Document {
  render () {
    return (
      <html>
        <body>
          <Main />
          <NextScript />
          <AmpAnalytics />
        </body>
      </html>
    )
  }
}
