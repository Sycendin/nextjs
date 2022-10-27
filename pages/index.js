import Head from "next/head";
import ArticleList from "../components/ArticleList";
export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Stuff</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome to next</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
