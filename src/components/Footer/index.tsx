import style from "./index.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style["info-wrapper"]}>
          <p>사업자 등록번호: 12345-67-89011</p>
          <p>주 데브굿</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
