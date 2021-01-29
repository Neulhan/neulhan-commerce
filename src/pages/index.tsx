import style from "./index.module.scss";
import FirstNav from "@components/FirstNav";
import SecondNav from "@components/SecondNav";
import ThirdNav from "@components/ThirdNav";
import { GetStaticProps } from "next";
import { GetProducts } from "@src/@types/product";

function HomePage({ products }) {
  console.log(products);
  return (
    <>
      <FirstNav></FirstNav>
      <SecondNav></SecondNav>
      <ThirdNav></ThirdNav>
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
              <li key={p.ID}>
                <div className={style.card}>
                  <div
                    className={style.image}
                    style={{ backgroundImage: `url(${p.img})` }}
                  ></div>
                  <p className={style.name}>{p.productName}</p>
                  <p className={style.price}>{p.price.toLocaleString()}</p>
                  <p className={style.promotion}>
                    {p.promotion.toLocaleString()} KRW
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
