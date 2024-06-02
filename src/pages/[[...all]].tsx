import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
} from "next/types";
import PageLayout from "../components/page-layout";

interface IPageProps {
  page: IPage;
}

interface IPage {
  title: string;
  content: string;
  adsBlocked: boolean;
}

export default function Home({ page }: IPageProps) {
  const { adsBlocked, title, content } = page || {};

  return (
    <>
      <PageLayout
        title={title}
        content={content}
        home={title === "Main Page"}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<IPageProps> = async (context) => {
  const path = (context.params?.all as string[]) ?? [];
  console.log({ path });

  const mainPage = {
    title: "Main Page",
    content: "Main page content",
    adsBlocked: false,
  };

  const newsPage = {
    title: "News",
    content: "Here will be news",
    adsBlocked: true,
  };

  const res: GetStaticPropsResult<IPageProps> = {
    props: {
      page: path.length ? newsPage : mainPage,
    },
  };

  return res;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  let paths = [] as string[];
  return {
    paths,
    fallback: false,
  };
};
