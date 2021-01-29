import { Product } from "@src/@types/product";
import ProductComponent from "@components/Admin/Product";
import style from "./index.module.scss";

function ProductListContainer({ products }: { products: Product[] }) {
  return (
    <section className={style.container}>
      <h1>상품관리</h1>
      <ul>
        {products.map((p) => (
          <ProductComponent key={p.ID} product={p}></ProductComponent>
        ))}
      </ul>
    </section>
  );
}

export default ProductListContainer;
