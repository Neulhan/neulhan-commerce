import style from "./index.module.scss";
import Link from "next/link";

function SecondNavigationComponent() {
  return (
    <>
      <nav className={style.second}>
        <div className="container">
          <div className={style.innerContainer}>
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="" />
                <div className={style.text}>
                  Neulhan <span>Commerce</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SecondNavigationComponent;
