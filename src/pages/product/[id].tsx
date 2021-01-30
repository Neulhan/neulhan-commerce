import { GetStaticProps, GetStaticPaths } from "next";
import { GetProductByID, GetProducts } from "@src/@types/product";
import MainContainer from "@src/containers/MainContainer";
import style from "./index.module.scss";

function PostDetail({ product }) {
  return (
    <MainContainer>
      <div className="container">
        <div className={style["detail-header"]}>
          <div
            className={style["left"]}
            style={{ backgroundImage: `url(${product.img})` }}
          ></div>
          <div className={style["right"]}>
            <div className={style["product-name"]}>{product.productName}</div>
            <div className={style.desc}>{product.desc}</div>
            <div className={style.price}>
              {product.price.toLocaleString()}원
            </div>
            <div className={style["button-wrapper"]}>
              <button>장바구니 담기</button>
              <button>구입하기</button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await GetProducts();
  const paths = products.map((product) => `/product/${product.ID}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await GetProductByID(+params.id);
  return { props: { product } };
};

export default PostDetail;
