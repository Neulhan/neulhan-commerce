import style from "./index.module.scss";
import FirstNav from "@components/FirstNav";
import SecondNav from "@components/SecondNav";
import ThirdNav from "@components/ThirdNav";

function HomePage() {
  return (
    <>
      <FirstNav></FirstNav>
      <SecondNav></SecondNav>
      <ThirdNav></ThirdNav>
      <div className={style.wrapper}>
        <div className="container">
          <h1 className={style.neulhan}>
            NEULHAN <span>COMMERCE</span>
          </h1>
          <button className={style.button}>Let's Start!</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
