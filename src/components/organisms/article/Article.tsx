import {FC} from "react";
import {Time} from "../../atoms/typographies/Time";

type Props = {
  title: string;
  thumbnail: string | undefined;
  created: number;
}

export const Article: FC<Props> = ({
                                     children,
                                     title,
                                     thumbnail,
                                     created
                                   }) => (
  <>
    <article>
      <Time date={new Date(created)} />
      <h1>{title}</h1>
      {thumbnail && <amp-img layout="responsive" width='560' height='315' src={thumbnail} />}
      {children}
    </article>
    <style jsx>{`
        article {
          margin-top: 1rem;
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
          background-color: #E4F1EF;
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
          border-bottom: 3px solid #487578;
          font-weight: 400;
          letter-spacing: 0;
        }
        h4 {
          font-size: 1.3rem;
          line-height: 1.8rem;
          padding: 2px 12px;
          margin-top: 3rem;
          margin-bottom: 2rem;
          border-left: 2px solid #487578;
        }
        blockquote {
          padding: 1rem;
          margin: 0;
          font-size: 0.9rem;
          background: #eee;
          border-radius: 4px;
        }
        em {
          background: linear-gradient(transparent 60%, #ffff66 60%);
        }
        ul, ol {
          color: #487578;
          border: dashed 2px #487578;
          background: white;
          padding: 0.5em 0.5em 0.5em 2em;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        ul li, ol li {
          line-height: 1.5;
          padding: 0.5em 0;
        }
      `}</style>
  </>
);
