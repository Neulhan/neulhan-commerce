import style from "./index.module.scss";

function SecondNavigationComponent() {
  return (
    <>
      <nav className={style.second}>
        <div className={style.container}>
          <div className={style.text + " container"}>NH</div>
        </div>
      </nav>
    </>
  );
}

export default SecondNavigationComponent;
