import type { CartState, CartProductAction } from "@/types/cart";

export function findCartItem(state: CartState, action: CartProductAction) {
  return state.find((item) => item.product.id === action.payload.product.id);
}

export function incrementCartItemQuantity(
  state: CartState,
  action: CartProductAction,
) {
  return state.map((cartItem) =>
    cartItem.product.id === action.payload.product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem,
  );
}

export function decrementCartItemQuantity(
  state: CartState,
  action: CartProductAction,
) {
  return state.map((cartItem) =>
    cartItem.product.id === action.payload.product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
}

export function removeCartItem(state: CartState, action: CartProductAction) {
  return state.filter(
    (cartItem) => cartItem.product.id !== action.payload.product.id,
  );
}

export function getUniqueProductCount(cart: CartState) {
  return cart.length;
}

export function getTotalItemCount(cart: CartState) {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

export function calculateCartTotal(cart: CartState) {
  return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
}