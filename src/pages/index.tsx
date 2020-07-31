import Head from 'next/head'
import { Body } from '../components/atoms/layouts/Body'
import {GetStaticProps, NextPage, PageConfig} from "next";
import tagmap from "../../gen/tagmap.json";
import ssgConfig from "../../amdxg.config";
import {Header} from "../components/organisms/common/Header";
import {Main} from "../components/atoms/layouts/Main";

type Props = {
  pages: {
    title: string;
    created: number;
    tags: string[];
    slug: string;
  }[],
  tags: string[];
}

export const config: PageConfig = {
  amp: true,
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { default: pages } = await import('../../gen/pages.json');
  const tags: string[] = Object.keys(tagmap);

  return ({
    props: {
      pages,
      tags
    }
  });
}

const IndexPage: NextPage<Props> = ({ pages, tags }) => (
  <Body>
    <Head>
      <title>{ssgConfig.siteName}</title>
    </Head>
    <Header />
    <Main>
      <h2>pages</h2>
      <ul>
        {pages.map(page => (<li key={page.slug}><a href={encodeURI(`/articles/${page.slug}`)}>{page.title}</a></li>))}
      </ul>
      <h2>tags</h2>
      <ul>
        {tags.map(tag => (<li key={tag}><a href={encodeURI(`/tags/${tag}`)}>{tag}</a></li>))}
      </ul>
    </Main>
  </Body>
);

export default IndexPage;
