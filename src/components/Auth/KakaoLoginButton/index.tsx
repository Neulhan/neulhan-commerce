import { Login } from "@src/@types/user";
import api from "@src/api";
import KakaoLogin from "react-kakao-login";

const token = process.env.KAKAO_TOKEN;

function KakaoLoginButton() {
  const onSuccess = async (r) => {
    const response = await KakaoLoginRequest(r);
    console.log(response);
    Login();
  };
  return (
    <KakaoLogin
      token={token}
      onSuccess={onSuccess}
      onFail={console.error}
      onLogout={console.info}
      style={{
        width: "100%",
        backgroundColor: "#FEE500",
        color: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{ width: "16px", marginRight: "8px" }}
        src="/icon/kakao.svg"
        alt=""
      />{" "}
      카카오로 로그인
    </KakaoLogin>
  );
}

export default KakaoLoginButton;

async function KakaoLoginRequest({ profile }) {
  const { data } = await api.post("/auth/kakao", {
    socialID: "" + profile.id,
    social: "kakao",
    email: profile.kakao_account.email,
    name: profile.kakao_account.profile.nickname,
  });
  return data;
}
