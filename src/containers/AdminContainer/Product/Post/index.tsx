import { useState } from "react";
import { CreateProduct, Product, UpdateProduct } from "@src/@types/product";
import Router from "next/router";
import style from "./index.module.scss";

interface Props {
  product: Product | undefined;
}

function AdminProductPostContainer(props: Props) {
  const { product: productDefault } = props;
  const [product, setProduct] = productDefault
    ? useState<Product>(productDefault)
    : useState<Product>({
        ID: undefined,
        CreatedAt: undefined,
        UpdatedAt: undefined,
        DeletedAt: undefined,
        productName: "",
        desc: "",
        img: "",
        imgAlt: "",
        price: 0,
        promotion: 0,
      });

  const handleChange = (e) => {
    const value = e.target.value;
    product[e.target.name] = isNaN(parseInt(value)) ? value : +value;
    setProduct({ ...product });
  };

  const handleClick = () => {
    if (productDefault) {
      UpdateProduct(product);
    } else {
      CreateProduct(product);
    }
    Router.push("/admin/product/list");
  };

  return (
    <div className={style.container}>
      <h1>{productDefault ? "상품수정" : "상품등록"}</h1>
      <p>상품이름</p>
      <input
        type="text"
        value={product.productName}
        name="productName"
        onChange={handleChange}
      />
      <p>사진</p>
      <input
        type="text"
        value={product.img}
        name="img"
        onChange={handleChange}
      />
      <p>사진 alt</p>
      <input
        type="text"
        value={product.imgAlt}
        name="imgAlt"
        onChange={handleChange}
      />
      <p>가격</p>
      <input
        type="number"
        value={product.price}
        name="price"
        onChange={handleChange}
      />
      <p>할인가</p>
      <input
        type="number"
        value={product.promotion}
        name="promotion"
        onChange={handleChange}
      />
      <p>상품설명</p>
      <input
        type="text"
        value={product.desc}
        name="desc"
        onChange={handleChange}
      />
      <button onClick={handleClick}>등록하기</button>
    </div>
  );
}

export default AdminProductPostContainer;
