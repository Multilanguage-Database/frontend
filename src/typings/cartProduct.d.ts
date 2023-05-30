export interface CartProduct {
    cart: string;
    product: string;
    title: string;
    price: string;
    quantity: number;
  }

export type AllCartProductsResponse = CartProduct[];