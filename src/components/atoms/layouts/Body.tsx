import {FC} from "react";

export const Body: FC = ({ children }) => (
  <>
    <div>
      {children}
    </div>
    <style jsx>{`
      div {
        width: 100vw;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 62px 1fr 32px;
        gap: 2rem;
      }
    `}</style>
    <style jsx global>{`
      html, div, span, applet, object, iframe,
      pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, img, ins, kbd, q, s, samp,
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
        color: var(--font-color);
        background-color: var(--background-color);
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
      :root {
        --dark-main-color: #376767
        --main-color: #5CADAD
        --light-main-color: #E4F1EF
        --font-color: #414042
        --background-color: #F7F6F5
        --shadow: 0 3px 6px rgba(0, 0, 0, 0.2)
        --highlight-color: #FFB36B
        --light-highlight-color: #FFF9E5
        --dark-gray: #515151
        --light-gray: #f5f5f5
        --light-secondary-color: #fff8f3
        --secondary-color: #ffc08d
      }
    `}</style>
  </>
);
