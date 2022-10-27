import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/article.module.css";
const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      <div className={articleStyles.grid}>
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article}></ArticleItem>
        ))}
      </div>
    </Fragment>
  );
};

export default ArticleList;
