import type { Product } from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartState = CartItem[];

export type CartAction =
  | {
      type: "ADD_PRODUCT";
      payload: { product: Product };
    }
  | {
      type: "REMOVE_PRODUCT";
      payload: { product: Product };
    }
  | {
      type: "INCREASE_QUANTITY";
      payload: { product: Product };
    }
  | {
      type: "CLEAR_CART";
    };

export type CartProductAction = Extract<
  CartAction,
  { payload: { product: Product } }
>;
