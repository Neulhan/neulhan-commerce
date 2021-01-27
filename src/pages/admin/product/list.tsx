import AdminContainer from "@src/containers/AdminContainer";
import ProductListContainer from "@src/containers/AdminContainer/Product/List/index.tsx";
import { GetStaticProps } from "next";

function ProductListAdmin({ products }) {
  return (
    <AdminContainer>
      <ProductListContainer products={products}></ProductListContainer>
    </AdminContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:8000/products/");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

export default ProductListAdmin;
