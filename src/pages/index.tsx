import style from "./index.module.scss";
import FrontierNav from "@components/FirstNav";

function HomePage() {
  return (
    <>
      <FrontierNav></FrontierNav>
      <div className={style.wrapper}>
        <div className="container">
          <h1 className={style.neulhan}>
            NEULHAN <span>COMMERCE</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
