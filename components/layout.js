import Nav from "./nav";
import Header from "./header";
import styles from "../styles/Layout.module.css";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
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
