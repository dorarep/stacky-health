import Head from 'next/head'
import { Body } from '../components/atoms/layouts/Body'
import {GetStaticProps, NextPage, PageConfig} from "next";
import tagmap from "../../gen/tagmap.json";
import ssgConfig from "../../amdxg.config";
import {Header} from "../components/organisms/common/Header";
import {Main} from "../components/atoms/layouts/Main";
import {Articles} from "../components/organisms/home/Articles";
import {Footer} from "../components/organisms/common/Footer";

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
};

const IndexPage: NextPage<Props> = ({ pages, tags }) => (
  <Body>
    <Head>
      <title>{ssgConfig.siteName}</title>
    </Head>
    <Header />
    <Main>
      <Articles pages={pages} />
    </Main>
    <Footer />
  </Body>
);

export default IndexPage;
