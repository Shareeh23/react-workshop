import type { CartAction, CartState } from "@/types/cart";
import { createContext, type Dispatch } from "react";

type CartContextValue = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextValue | null>(null);
