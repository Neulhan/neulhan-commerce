import MainContainer from "@src/containers/MainContainer";
import MyPageContainer from "@src/containers/auth/MyPageContainer";

function MyPage() {
  return (
    <MainContainer>
      <MyPageContainer></MyPageContainer>
    </MainContainer>
  );
}

export default MyPage;
