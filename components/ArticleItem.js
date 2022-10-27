import { Fragment } from "react";
import Link from "next/link";
import articlesStyles from "../styles/article.module.css";
const ArticleItem = ({ article }) => {
  return (
    <Fragment>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <div className={articlesStyles.card}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      </Link>
    </Fragment>
  );
};
export default ArticleItem;
