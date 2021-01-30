import style from "./index.module.scss";

function LoginContainer() {
  return (
    <div className={style["login-container"]}>
      <div className={style["login-box"]}>
        <div className={style.title}>로그인</div>
        <input placeholder="아이디" type="text" />
        <input placeholder="비밀번호" type="text" />
        <button className={style.submit}>로그인</button>
      </div>
    </div>
  );
}

export default LoginContainer;
