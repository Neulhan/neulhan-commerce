import style from "./index.module.scss";
import Link from "next/link";
import { isLoggedIn, Logout } from "@src/@types/user";

function MainNavigationComponent() {
  return (
    <>
      <nav className={style.second}>
        <div className="container">
          <div className={style.innerContainer}>
            <div className={style.left}>
              <Link href="/">
                <a>
                  <img src="/logo-small.png" alt="" />
                </a>
              </Link>
            </div>
            <div className={style.right}>
              {isLoggedIn() ? (
                <>
                  <Link href="/auth/mypage">마이페이지</Link>
                  <button onClick={Logout}>로그아웃</button>
                </>
              ) : (
                <>
                  <Link href="/auth/login">
                    <a>로그인</a>
                  </Link>
                  <Link href="/auth/signup">
                    <a>회원가입</a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigationComponent;
