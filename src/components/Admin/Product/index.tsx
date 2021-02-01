import { DeleteProductByID, Product } from "@src/@types/product";
import style from "./index.module.scss";
import Router from "next/router";
import { Dispatch, SetStateAction } from "react";

function ProductComponent({
  product,
  productList,
  setProductList,
}: {
  product: Product;
  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
}) {
  const onClick = async () => {
    const data = await DeleteProductByID(parseInt(product.ID));
    if (data.status === "success") {
      setProductList(productList.filter((p) => p.ID !== product.ID));
    } else {
      alert("삭제실패");
    }
  };
  return (
    <li className={style.product}>
      <div className={style.imageWrapper}>
        <img src={product.img} alt={product.imgAlt} />
      </div>
      <div className={style.info}>{product.ID}</div>
      <div className={style.info}>{product.productName}</div>
      {/* <div className={style.info}>{product.desc}</div> */}
      <div className={style.info}>
        {new Date(product.CreatedAt).getFullYear()}.
        {new Date(product.CreatedAt).getMonth() + 1}.
        {new Date(product.CreatedAt).getDate()}
      </div>
      <div className={style.info}>{product.promotion.toLocaleString()}KRW</div>
      <div className={style.info}>{product.price.toLocaleString()}KRW</div>
      <button
        className={style.edit}
        onClick={() => {
          Router.push(`/admin/product/update/${product.ID}`);
        }}
      ></button>
      <button onClick={onClick}></button>
    </li>
  );
}

export default ProductComponent;
