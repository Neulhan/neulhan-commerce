import GitHubLogin from "react-github-login";
import style from "./index.module.scss";

const token = process.env.GITHUB_TOKEN;

function GithubLoginButton() {
  const onSuccess = (r) => {
    console.log(r);
  };
  const onFailure = (r) => {
    console.error(r);
  };
  return (
    <GitHubLogin
      clientId={token}
      redirectUri="http://localhost:3000/auth/login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      className={style.button}
    >
      ⎋ 깃허브로 로그인
    </GitHubLogin>
  );
}

export default GithubLoginButton;
