import Nav from "./nav";
import Meta from "./Meta";
import Header from "./header";
import styles from "../styles/Layout.module.css";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Meta />
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {/* <h1>Layout</h1> */}
          {children}
        </main>
      </div>
    </Fragment>
  );
};
export default Layout;
