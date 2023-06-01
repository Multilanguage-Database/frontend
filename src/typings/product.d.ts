export interface Product {
    _id: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
  }

export type AllProductsResponse = Product[];

export type OneProductResponse = Product;