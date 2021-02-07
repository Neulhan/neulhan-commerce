import KakaoLoginButton from "@src/components/Auth/KakaoLoginButton";
import GithubLoginButton from "@src/components/Auth/GithubLoginButton";
import style from "./index.module.scss";
import { isLoggedIn } from "@src/@types/user";
import Router from "next/router";
import { LOGIN_REDIRECT_URL } from "@src/configs";

function LoginContainer() {
  if (isLoggedIn()) {
    Router.push(LOGIN_REDIRECT_URL);
  }

  return (
    <div className={style["login-container"]}>
      <div className={style["login-box"]}>
        <div className={style.title}>로그인</div>
        <div className={style["sub-text"]}>
          늘한 커머스에 로그인하고 각종 상품들을 찾아보세요.
        </div>
        <KakaoLoginButton></KakaoLoginButton>
        <GithubLoginButton></GithubLoginButton>
      </div>
    </div>
  );
}

export default LoginContainer;
