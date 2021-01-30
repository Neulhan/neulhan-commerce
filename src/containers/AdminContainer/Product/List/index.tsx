import { Product } from "@src/@types/product";
import ProductComponent from "@components/Admin/Product";
import style from "./index.module.scss";
import { useState } from "react";

function ProductListContainer({ products }: { products: Product[] }) {
  const [productList, setProductList] = useState<Product[]>(products);
  return (
    <section className={style.container}>
      <h1>상품관리</h1>
      <ul>
        {productList.map((p) => (
          <ProductComponent
            key={p.ID}
            productList={productList}
            setProductList={setProductList}
            product={p}
          ></ProductComponent>
        ))}
      </ul>
    </section>
  );
}

export default ProductListContainer;
