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

export function DeleteProduct(product: Product): Promise<Response> {
  return fetch("http://localhost:9000/products", {
    method: "DELETE",
    body: JSON.stringify(product),
  }).then((response) => response.json());
}

export function CreateProduct(product: Product): Promise<Response> {
  return fetch("http://localhost:9000/products", {
    method: "POST",
    body: JSON.stringify(product),
  }).then((response) => response.json());
}

export function UpdateProduct(product: Product): Promise<Response> {
  return fetch("http://localhost:9000/products/update", {
    method: "POST",
    body: JSON.stringify(product),
  }).then((response) => response.json());
}

export function GetProducts(): Promise<Response> {
  return fetch("http://localhost:9000/products", {
    method: "GET",
  }).then((response) => response.json());
}

export function GetProductByID(id: number): Promise<Response> {
  return fetch(`http://localhost:9000/products/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}
