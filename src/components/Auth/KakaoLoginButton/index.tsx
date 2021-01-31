import api from "@src/api";
import { data } from "autoprefixer";
import KakaoLogin from "react-kakao-login";

const token = process.env.KAKAO_TOKEN;

function KakaoLoginButton() {
  const onSuccess = async (r) => {
    const response = await KakaoLoginRequest(r);
    console.log(response);
  };
  return (
    <KakaoLogin
      token={token}
      onSuccess={onSuccess}
      onFail={console.error}
      onLogout={console.info}
      style={{
        width: "100%",
        backgroundColor: "rgb(255, 235, 0)",
        color: "rgb(60, 30, 30)",
      }}
    >
      😎 카카오로 로그인
    </KakaoLogin>
  );
}

export default KakaoLoginButton;

async function KakaoLoginRequest({ profile }) {
  console.log(profile);
  const { data } = await api.post("/auth/kakao", {
    kakaoID: profile.id,
    email: profile.kakao_account.email,
    name: profile.kakao_account.profile.nickname,
    image: profile.kakao_account.profile.thumbnail_image_url,
    fullImage: profile.kakao_account.profile.profile_image_url,
  });
  return data;
}
