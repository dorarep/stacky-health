import Head from 'next/head'
import {GetStaticPaths, GetStaticProps, NextPage, PageConfig} from "next";
import tagmap from "../../../gen/tagmap.json";
import {Body} from "../../components/atoms/layouts/Body";
import ssgConfig from "../../../amdxg.config";
import {Main} from "../../components/atoms/layouts/Main";
import {Header} from "../../components/organisms/common/Header";

type Pages = {
  title: string;
  slug: string;
}[]

type TagMap = {
  [tag: string]: Pages;
}

type Props = {
  tag: string;
  pages: Pages;
};

export const config: PageConfig = {
  amp: true,
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(tagmap as TagMap).map(tag => encodeURI(`/tags/${tag}`)),
  fallback: false
});

export const getStaticProps: GetStaticProps = async (props) => {
  const tag = props.params.tag as string;

  return ({
    props: {
      tag,
      pages: (tagmap as TagMap)[tag]
    } as Props,
  });
};

const TagPage: NextPage<Props> = ({ tag, pages }) => (
  <Body>
    <Head>
      <title>{tag} - {ssgConfig.siteName}</title>
    </Head>
    <Header />
    <Main>
      <h1>{tag}</h1>
      <ul>
        {pages.map(page => (<li key={page.slug}><a href={`/articles/${page.slug}`}>{page.title}</a></li>))}
      </ul>
    </Main>
  </Body>
);

export default TagPage;
