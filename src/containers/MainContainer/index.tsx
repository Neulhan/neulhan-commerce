import style from "./index.module.scss";
import MainNav from "@components/MainNav";
import SubNav from "@components/SubNav";
import Footer from "@components/Footer";

function MainContainer({ children }) {
  return (
    <>
      <MainNav></MainNav>
      <SubNav></SubNav>
      <div className={style.body}>{children}</div>
      <Footer></Footer>
    </>
  );
}

export default MainContainer;
