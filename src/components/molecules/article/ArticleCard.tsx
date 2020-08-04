import {FC} from "react";
import pages from "../../../../gen/pages.json";

type Props = {
  slug: string;
}

const Amazon: FC<Props> = ({ slug }) => {
  const article = pages.find(page => page.slug === slug);

  return (
    <>
      <a className="card" href={`/articles/${slug}`}>
        <amp-img layout="responsive" alt={article.title} width='560' height='315' src={article.thumbnail} />
        <div className="body">
          <span className="label">関連記事</span>
          <div className="title">{article.title}</div>
        </div>
      </a>
      <style jsx>{`
        .label {
          height: 32px;
          line-height: 32px;
          position: relative;
          margin: 0 8px 8px 0;
          padding: 2px 10px 2px 12px;
          background: var(--dark-main-color);
          border-radius: 3px;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
        .card {
          margin-top: 2rem;
          margin-bottom: 2rem;
          padding: 1rem;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
          transition: .3s ease;
          display: grid;
          grid-template-columns: 1fr 2fr;
          color: var(--font-color);
          text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
          .card {
            grid-template-columns: 1fr;
          }
        }
        .card:hover {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }
        .body {
          margin: auto 0;
          padding: 1rem;
        }
        .title {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Amazon;

