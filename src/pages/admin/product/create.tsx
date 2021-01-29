import AdminContainer from "@src/containers/AdminContainer";
import AdminProductCreateContainer from "@src/containers/AdminContainer/Product/Post";

function ProductCreateAdmin() {
  return (
    <AdminContainer>
      <AdminProductCreateContainer
        product={undefined}
      ></AdminProductCreateContainer>
    </AdminContainer>
  );
}

export default ProductCreateAdmin;
