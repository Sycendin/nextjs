import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { server } from "../../config";
import Link from "next/link";
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // return <div>This is article {id}</div>;
  return (
    <div>
      <Meta title={article.title} description={article.excerpt} />
      <h1>This is article {article.id}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </div>
  );
};
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  // Generate paths for ids
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    // return paths
    paths,
    // go to 404 page if doesnt exist
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     // go to 404 page if doesnt exist
//     fallback: false,
//   };
// };
export default article;
