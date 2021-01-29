import { GetProducts } from "@src/@types/product";
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
  const products = await GetProducts();
  return {
    props: {
      products,
    },
  };
};

export default ProductListAdmin;
