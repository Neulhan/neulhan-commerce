import style from "./index.module.scss";
import MainNav from "@components/MainNav";
import SubNav from "@components/SubNav";

function MainContainer({ children }) {
  return (
    <>
      <MainNav></MainNav>
      <SubNav></SubNav>
      <div className={style.body}>{children}</div>
    </>
  );
}

export default MainContainer;
