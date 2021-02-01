import { GetProductByID, GetProducts, Product } from "@src/@types/product";
import AdminContainer from "@src/containers/AdminContainer";
import ProductUpdateContainer from "@src/containers/AdminContainer/Product/Post/index.tsx";
import { GetStaticProps, GetStaticPaths } from "next";

function ProductUpdateAdmin({ product }: { product: Product }) {
  return (
    <AdminContainer>
      <ProductUpdateContainer product={product}></ProductUpdateContainer>
    </AdminContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const products = await GetProducts();

  const paths = products.map(
    (product) => `/admin/product/update/${product.ID}`
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await GetProductByID(+params.id);
  return {
    props: {
      product,
    },
  };
};

export default ProductUpdateAdmin;
