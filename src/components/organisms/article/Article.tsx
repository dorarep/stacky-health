import {FC} from "react";
import {Time} from "../../atoms/typographies/Time";
import {Tag} from "../../atoms/Tag";

type Props = {
  title: string;
  thumbnail: string | undefined;
  created: number;
  tags: string[];
}

export const Article: FC<Props> = ({
                                     children,
                                     title,
                                     thumbnail,
                                     created,
                                     tags
                                   }) => (
  <>
    <article>
      <Time date={new Date(created)} />
      <div>{tags.map(tag => (<Tag key={tag}>{tag}</Tag>))}</div>
      <h1>{title}</h1>
      {thumbnail && <amp-img alt="thumbnail" layout="responsive" width='560' height='315' src={thumbnail} />}
      {children}
    </article>
    <style jsx>{`
        article {
          width: 100%:
          max-width: 900px;
          background-color: white;
          padding: 1rem;
        }
        h1 {
          font-size: 1.5rem;
          line-height: 2.3rem;
          margin-bottom: 1rem;
        }
      `}</style>
    <style jsx global>{`
        .markdown-body:first-child {
          visibility: hidden;
        }
        h2 {
          font-size: 1.65rem;
          line-height: 2.2rem;
          padding: 15px;
          padding-bottom: 16px;
          margin-top: 3rem;
          margin-bottom: 2rem;
          background-color: var(--light-main-color);
          border-left: 5px solid var(--main-color);
          border-radius: 2px;
          font-weight: 400;
          letter-spacing: 0;
        }
        h3 {
          font-size: 1.5rem;
          line-height: 2rem;
          padding: 4px 8px;
          padding-top: 0;
          margin-top: 3rem;
          margin-bottom: 2rem;
          border-bottom: 3px solid var(--main-color);
          font-weight: 400;
          letter-spacing: 0;
        }
        h4 {
          font-size: 1.3rem;
          line-height: 1.8rem;
          padding: 2px 12px;
          margin-top: 3rem;
          margin-bottom: 2rem;
          border-left: 2px solid var(--main-color);
        }
        blockquote {
          margin-left: 0;
          margin-right: 0;
          padding: 1rem;
          box-sizing: border-box;
          font-style: italic;
          background: var(--light-gray);
          color: var(--dark-gray);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
        }
        blockquote p {
          padding: 0;
          margin: 7px 0;
          line-height: 1.7;
        }
        blockquote cite {
          display: block;
          text-align: right;
          color: var(--dark-gray);
          font-size: 0.9em;
        }
        em {
          font-weight: bold;
          font-style: normal;
          background: linear-gradient(transparent 60%, var(--light-highlight-color) 60%);
        }
        strong {
          background: linear-gradient(transparent 60%, var(--light-highlight-color) 60%);
        }
        ul, ol {
          border: dashed 2px var(--highlight-color);
          background: var(--light-highlight-color);
          padding: 0.5em 0.5em 0.5em 2em;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        ul li, ol li {
          line-height: 1.5;
          padding: 0.5em 0;
        }
        .highlight-box {
          border-radius: 5px;
          border: solid 2px var(--highlight-color);
          background-color: var(--light-highlight-color);
          font-weight: bold;
          padding: 1rem;
        }
        table {
          border-collapse: collapse;
          margin: 0 auto;
          padding: 0;
          width: 100%;
          table-layout: fixed;
        }
        table tr {
          background-color: var(--background-color);
          padding: .35em;
          border-bottom: 2px solid #fff;
        }
        table th,
        table td {
          padding: 1em 10px 1em 1em;
          border-right: 2px solid #fff;
        }
        table th {
          font-size: .85em;
        }
        table thead tr{
          background-color: var(--main-color);
          color:#fff;
        }
      `}</style>
  </>
);
