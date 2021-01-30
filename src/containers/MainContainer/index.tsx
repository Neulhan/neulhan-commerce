import style from "./index.module.scss";
import FirstNav from "@components/FirstNav";
import SecondNav from "@components/SecondNav";
import ThirdNav from "@components/ThirdNav";

function MainContainer({ children }) {
  return (
    <>
      <FirstNav></FirstNav>
      <SecondNav></SecondNav>
      <ThirdNav></ThirdNav>
      <div className={style.body}>{children}</div>
    </>
  );
}

export default MainContainer;
