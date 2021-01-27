import SideNav from "@components/Admin/SideNav";
import style from "./index.module.scss";

function AdminContainer(props: any) {
  return (
    <div className={style.container}>
      <SideNav></SideNav>
      <div className={style.content}>{props.children}</div>
    </div>
  );
}

export default AdminContainer;
