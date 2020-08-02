import {FC} from "react";

type Props = {
  pages: {
    title: string;
    slug: string;
    thumbnail?: string;
  }[]
}

export const Articles: FC<Props> = ({ pages }) => (
  <>
    <div>
      {pages.map(page => (
        <a href={`/articles/${page.slug}`} key={page.slug}>
          <article>
            <amp-img alt={page.title} layout="responsive" width='560' height='315' src={page.thumbnail} />
          </article>
        </a>
      ))}
    </div>
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }
      article {
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
        transition: .3s ease;
      }
      article:hover {
        box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      }
    `}</style>
  </>
);
