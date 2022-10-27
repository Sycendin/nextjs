import headerStyles from "../styles/header.module.css";

const Header = () => {
  const x = 4;
  return (
    <div>
      {/* <h1 className="title"> */}
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with latest web dev news
      </p>
      {/* <style jsx>{`
        .title {
          color: ${x > 3 ? "red" : "blue"};
        }
      `}</style> */}
    </div>
  );
};
export default Header;
