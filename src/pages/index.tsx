import Head from 'next/head'
import { Layout } from '../components/Layout'
import {GetStaticProps, NextPage, PageConfig} from "next";
import tagmap from "../../gen/tagmap.json";
import ssgConfig from "../../amdxg.config";

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
  <Layout>
    <Head>
      <title>{ssgConfig.siteName}</title>
    </Head>
    <h1>{ssgConfig.siteName}</h1>
    <h2>pages</h2>
    <ul>
      {pages.map(page => (<li key={page.slug}><a href={`/articles/${page.slug}`}>{page.title}</a></li>))}
    </ul>
    <h2>tags</h2>
    <ul>
      {tags.map(tag => (<li key={tag}><a href={`/tags/${tag}`}>{tag}</a></li>))}
    </ul>
  </Layout>
);

export default IndexPage;