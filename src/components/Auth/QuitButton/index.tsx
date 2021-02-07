import { GetUserInfo, Logout, QuitUser } from "@src/@types/user";

function QuitButton() {
  const onClickHandler = async (e) => {
    const user = await GetUserInfo(true);
    const result = await QuitUser();
    if (result === user.ID) {
      Logout();
      return;
    }
    alert(result);
  };
  return <button onClick={onClickHandler}>회원탈퇴</button>;
}

export default QuitButton;
