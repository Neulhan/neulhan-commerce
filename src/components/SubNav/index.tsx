import style from "./index.module.scss";

function SubNavigationComponent() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.container}>
          <h1 className={style.left}>개발자를 위한 온라인커머스 DEVGOOD</h1>
          <div className={style.right}>장바구니 (1)</div>
        </div>
      </nav>
    </>
  );
}

export default SubNavigationComponent;
