import Head from 'next/head'
import {GetStaticPaths, GetStaticProps, NextPage, PageConfig} from "next";
import ReactDOMServer from "react-dom/server";
import pages from "../../../gen/pages.json";
import ssgConfig from "../../../amdxg.config";
import {Layout} from "../../components/Layout";

type Props = {
  slug: string;
  toc: Array<any>;
  history: Array<any>;
  frontmatter: {
    description?: string;
    title: string;
    created: number;
    tags?: string[];
  };
  tags: string[];
  html: string;
};

export const config: PageConfig = {
  amp: true,
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: pages.map(page => `/articles/${page.slug}`),
  fallback: false
});

export const getStaticProps: GetStaticProps = async (props) => {
  const slug = props.params.slug;
  const { default: Doc, toc, frontmatter } = await import(`../../../docs/${slug}.mdx`);
  const { default: history } = await import(`../../../gen/${slug}.history.json`);

  return ({
    props: {
      slug,
      toc,
      history,
      tags: frontmatter.tags || [],
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
        content={ssgConfig.host + "/ogp/" + props.slug + ".png"}
      />
    </Head>
    <Layout>
      <a href='/'>back</a>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </Layout>
  </>
);

export default ArticlePage;
