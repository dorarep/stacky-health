import {FC} from "react";

export const Body: FC = ({ children }) => (
  <>
    {children}
    <style jsx global>{`
      html, div, span, applet, object, iframe,
      pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed, 
      figure, figcaption, footer, header, hgroup, 
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      body {
        font-family: sans-serif;
        line-height 2;
        font-size: 17px;
        color: #414042;
        background-color: #F7F6F5;
      }
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      p {
        margin-block-start: 1.2rem;
        margin-block-end: 1.2rem;
      }
      blockquote, q {
        quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}</style>
  </>
);
