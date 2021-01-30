import style from "./index.module.scss";
import Link from "next/link";
import { GetStaticProps } from "next";
import { GetProducts } from "@src/@types/product";
import MainContainer from "@src/containers/MainContainer";

function HomePage({ products }) {
  return (
    <>
      <MainContainer>
        <div className={style.wrapper}>
          <div className="container">
            <h1 className={style.neulhan}>
              NEULHAN <span>COMMERCE</span>
            </h1>
          </div>
        </div>
        <div className={style.wrapper}>
          <div className="container">
            <ul className={style.cardWrapper}>
              {products.map((p) => (
                <Link key={p.ID} href={`/product/${p.ID}`}>
                  <li>
                    <div className={style.card}>
                      <div
                        className={style.image}
                        style={{ backgroundImage: `url(${p.img})` }}
                      ></div>
                      <p className={style.name}>{p.productName}</p>
                      <p className={style.price}>
                        {p.price.toLocaleString()}원
                      </p>
                      <p className={style.promotion}>
                        {p.promotion.toLocaleString()}원
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.wrapper}></div>
      </MainContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await GetProducts();
  return {
    props: {
      products,
    },
  };
};

export default HomePage;
