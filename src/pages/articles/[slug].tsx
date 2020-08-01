import Head from 'next/head'
import {GetStaticPaths, GetStaticProps, NextPage, PageConfig} from "next";
import ReactDOMServer from "react-dom/server";
import pages from "../../../gen/pages.json";
import ssgConfig from "../../../amdxg.config";
import {Body} from "../../components/atoms/layouts/Body";
import {Article} from "../../components/organisms/article/Article";
import {Main} from "../../components/atoms/layouts/Main";
import {Header} from "../../components/organisms/common/Header";

type Props = {
  slug: string;
  toc: Array<any>;
  history: Array<any>;
  frontmatter: {
    description?: string;
    title: string;
    created: number;
    tags?: string[];
    thumbnail?: string;
  };
  tags: string[];
  html: string;
};

export const config: PageConfig = {
  amp: true,
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: pages.map(page => encodeURI(`/articles/${page.slug}`)),
  fallback: false
});

export const getStaticProps: GetStaticProps = async (props) => {
  const slug = props.params.slug;
  const { default: Doc, toc, frontmatter } = await import(`../../../docs/${slug}.mdx`);
  const { default: history } = await import(`../../../gen/${slug}.history.json`);
  console.log(Doc, toc);

  return ({
    props: {
      slug,
      toc,
      history,
      tags: frontmatter?.tags || [],
      frontmatter: frontmatter || { title: slug, created: 0, tags: [] },
      html: ReactDOMServer.renderToStaticMarkup(<Doc amp />),
    } as Props,
  });
};

const ArticlePage: NextPage<Props> = props => (
  <>
    <Head>
      <title>{props.frontmatter.title} - {ssgConfig.siteName}</title>
      <meta property="og:title" content={props.frontmatter.title} />
      <meta name="twitter:site" content="@mizchi" />
      <meta
        property="og:description"
        content={props.frontmatter.description ?? ""}
      />
      <meta property="og:url" content={ssgConfig.host + "/" + props.slug} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={props.frontmatter.thumbnail || ssgConfig.host + "/ogp/" + props.slug + ".png"}
      />
    </Head>
    <Body>
      <Header />
      <Main>
        <Article title={props.frontmatter.title} thumbnail={props.frontmatter.thumbnail} created={props.frontmatter.created}>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </Article>
      </Main>
    </Body>
  </>
);

export default ArticlePage;
