import type { CartAction, CartState, CartProductAction } from "@/types/cart";

import { Minus, Plus, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useReducer } from "react";

const sampleCartItems = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    quantity: 2,
    thumbnail: "https://dummyjson.com/image/100x100",
  },
  {
    id: 2,
    title: "Eyeshadow Palette",
    price: 19.99,
    quantity: 1,
    thumbnail: "https://dummyjson.com/image/100x100",
  },
];

function findCartItem(state: CartState, action: CartProductAction) {
  return state.find((item) => item.product.id === action.payload.product.id);
}

function incrementCartItemQuantity(
  state: CartState,
  action: CartProductAction,
) {
  return state.map((cartItem) =>
    cartItem.product.id === action.payload.product.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem,
  );
}

function removeCartItem(state: CartState, action: CartProductAction) {
  return state.filter(
    (cartItem) => cartItem.product.id !== action.payload.product.id,
  );
}

function reducer(state: CartState, action: CartAction) {
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

export default function CartSidebar() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <aside className="w-full lg:w-80 xl:w-96 lg:shrink-0">
      <Card className="gap-0 border-border/60 bg-card">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between gap-2 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShoppingCart className="size-5" />
            </div>

            <div>
              <CardTitle className="text-lg">Shopping Cart</CardTitle>

              <p className="mt-1 text-xs text-muted-foreground">
                Your selected items
              </p>
            </div>
          </div>

          <Button variant="ghost" size="sm" className="text-destructive">
            Clear Cart
          </Button>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-5 px-5 py-5">
          {/* Cart items */}
          <div className="space-y-5">
            {sampleCartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                {/* Thumbnail */}
                <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Item details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-sm font-medium">
                      {item.title}
                    </h3>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>

                  <p className="mt-1 text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-7"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3" />
                    </Button>

                    <span className="w-5 text-center text-sm">
                      {item.quantity}
                    </span>

                    <Button
                      variant="outline"
                      size="icon"
                      className="size-7"
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {/* Cart summary */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Unique products</span>

              <Badge variant="secondary">2</Badge>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total items</span>

              <span>3</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>

              <span>$39.97</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>

              <span className="text-2xl font-bold">$39.97</span>
            </div>
          </div>
        </CardContent>

        {/* Checkout */}
        <CardFooter className="flex-col gap-3 px-5 pb-5">
          <Button className="w-full gap-2">
            <ShoppingBag className="size-4" />
            Checkout
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Shipping and taxes calculated at checkout.
          </p>
        </CardFooter>
      </Card>
    </aside>
  );
}
