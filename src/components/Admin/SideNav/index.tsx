import style from "./index.module.scss";
import Link from "next/link";

function SideNavigationComponent() {
  return (
    <div className={style["side-nav"]}>
      <div className={style.navHeader}>Neulhan Commerce Admin</div>
      <ul className={style.adminList}>
        <li>
          <Link href="/admin/product/list">
            <a className={style.link}>상품관리</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/product/create">
            <a className={style.link}>상품등록</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigationComponent;
