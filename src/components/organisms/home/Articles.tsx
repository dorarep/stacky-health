import {FC} from "react";

type Props = {
  pages: {
    title: string;
    created: number;
    tags: string[];
    slug: string;
    thumbnail?: string;
  }[]
}

export const Articles: FC<Props> = ({
                                     pages
                                   }) => (
  <>
    <div>
      {pages.map(page => (
        <a href={encodeURI(`/articles/${page.slug}`)} key={page.slug}>
          <article>
            <amp-img layout="responsive" width='560' height='315' src={page.thumbnail} />
          </article>
        </a>
      ))}
    </div>
    <style jsx>{`
      div {
        margin-top: 1rem;
        background-color: white;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      article {
        box-shadow: 0 1px 3px rgba(0,0,0,.18);
        transition: .3s ease;
      }
      article:hover {
        box-shadow: 0 4px 4px rgba(0,0,0,.5);
        transform: translateY(-4px);
      }
    `}</style>
  </>
);
