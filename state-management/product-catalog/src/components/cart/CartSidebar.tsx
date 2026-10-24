import { useCart } from "@/hooks/use-cart";

import {
  getUniqueProductCount,
  getTotalItemCount,
  calculateCartTotal,
} from "@/utils/cart";

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

export default function CartSidebar() {
  const { state, dispatch } = useCart();

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

          <Button
            variant="ghost"
            size="sm"
            className="text-destructive"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </Button>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-5 px-5 py-5">
          {/* Cart items */}
          <div className="space-y-5">
            {state.map((item) => (
              <div key={item.product.id} className="flex gap-3">
                {/* Thumbnail */}
                <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Item details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-2 text-sm font-medium">
                      {item.product.title}
                    </h3>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 text-muted-foreground hover:text-destructive"
                      aria-label={`Remove ${item.product.title}`}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_PRODUCT",
                          payload: { product: item.product },
                        })
                      }
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>

                  <p className="mt-1 text-sm font-semibold">
                    ${item.product.price.toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-7"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_QUANTITY",
                          payload: { product: item.product },
                        })
                      }
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
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: { product: item.product },
                        })
                      }
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

              <Badge variant="secondary">{getUniqueProductCount(state)}</Badge>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total items</span>

              <span>{getTotalItemCount(state)}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>

              <span>${calculateCartTotal(state)}</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="font-semibold">Total</span>

              <span className="text-2xl font-bold">
                ${calculateCartTotal(state)}
              </span>
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
