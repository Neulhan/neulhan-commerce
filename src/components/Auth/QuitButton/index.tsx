import { QuitUser } from "@src/@types/user";

function QuitButton() {
  const onClickHandler = async (e) => {
    const result = await QuitUser();
    console.log(result);
  };
  return <button onClick={onClickHandler}>회원탈퇴</button>;
}

export default QuitButton;
