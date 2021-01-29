import { DeleteProduct, Product } from "@src/@types/product";
import style from "./index.module.scss";
import useProductsSWR from "@src/swr/products";
import Router from "next/router";

function ProductComponent({ product }: { product: Product }) {
  const onClick = async () => {
    const res = await DeleteProduct(product);
    if (res.status === "success") {
      location.reload();
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
