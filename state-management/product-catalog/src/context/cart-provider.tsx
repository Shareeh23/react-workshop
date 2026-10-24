import { useReducer, type ReactNode } from "react";
import { reducer } from "@/reducer/cart-reducer";
import { CartContext } from "./cart-context";

export function CartProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
  );
    
}