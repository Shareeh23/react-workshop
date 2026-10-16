import type { CartAction, CartState } from "@/types/cart";

import {
  findCartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  removeCartItem,
} from "@/utils/cart";

export function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const itemExists = findCartItem(state, action);

      if (itemExists) {
        return incrementCartItemQuantity(state, action);
      }

      return [...state, { product: action.payload.product, quantity: 1 }];
    }

    case "INCREASE_QUANTITY": {
      const itemExists = findCartItem(state, action);

      if (itemExists) {
        return incrementCartItemQuantity(state, action);
      }

      return state;
    }

    case "DECREASE_QUANTITY": {
      const itemExists = findCartItem(state, action);

      if (itemExists) {
        return decrementCartItemQuantity(state, action);
      }

      return state;
    }

    case "REMOVE_PRODUCT": {
      const itemExists = findCartItem(state, action);

      if (itemExists) {
        return removeCartItem(state, action);
      }

      return state;
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}
