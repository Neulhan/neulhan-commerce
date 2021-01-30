import style from "./index.module.scss";
import Link from "next/link";

function SecondNavigationComponent() {
  return (
    <>
      <nav className={style.second}>
        <div className="container">
          <div className={style.innerContainer}>
            <div className={style.left}>
              <Link href="/">
                <a>
                  <img src="/logo.svg" alt="" />
                  <div className={style.text}>
                    Neulhan <span>Commerce</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className={style.right}>
              <Link href="/auth/login">
                <a>로그인</a>
              </Link>
              <Link href="/auth/signup">
                <a>회원가입</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SecondNavigationComponent;
