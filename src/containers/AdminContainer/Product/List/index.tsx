import style from "./index.module.scss";

function ProductListContainer({ products }) {
  console.log(products);
  return (
    <section className={style.container}>
      <h1 className={style.containerTitle}>상품목록</h1>
      <ul>
        {products.map((p) => (
          <li key={p.ID}>
            <img src={p.img} alt={p.imgAlt} />
            <div className={style.info}>{p.ID}</div>
            <div className={style.info}>{p.productName}</div>
            <div className={style.info}>{p.desc}</div>
            <div className={style.info}>{p.CreatedAt}</div>
            <div className={style.info}>{p.promotion.toLocaleString()}KRW</div>
            <div className={style.info}>{p.price.toLocaleString()}KRW</div>
            <button></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductListContainer;
