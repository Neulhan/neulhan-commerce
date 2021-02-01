import api from "@src/api";

export interface Product {
  ID: string | undefined;
  CreatedAt: Date | undefined;
  UpdatedAt: Date | undefined;
  DeletedAt: Date | undefined;
  productName: string;
  desc: string;
  img: string;
  imgAlt: string;
  price: number;
  promotion: number;
}

export async function DeleteProductByID(id: number) {
  const { data } = await api.delete(`/products/${id}`);
  return data;
}

export async function CreateProduct(product: Product) {
  const { data } = await api.post("/products", { ...product });
  return data;
}

export async function UpdateProduct(product: Product) {
  const { data } = await api.post("/products/update", { ...product });
  return data;
}

export async function GetProducts() {
  const { data } = await api.get("/products");
  return data;
}

export async function GetProductByID(id: number) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
