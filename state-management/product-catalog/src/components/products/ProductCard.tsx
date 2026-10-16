import type { Product } from "@/types/products";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-card py-0">
      {/* Product image */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        <Badge className="absolute left-3 top-3 capitalize">
          {product.category}
        </Badge>
      </div>

      {/* Product information */}
      <CardContent className="flex-1 space-y-3 px-4 pt-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.brand}
          </p>

          <h3 className="mt-1 text-lg font-semibold leading-tight">
            {product.title}
          </h3>
        </div>

        <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>

          <Badge variant="secondary">
            {product.discountPercentage.toFixed(0)}% off
          </Badge>
        </div>
      </CardContent>

      {/* Add to cart */}
      <CardFooter className="mt-auto px-4 pb-4">
        <Button
          className="w-full gap-2"
          onClick={() =>
            dispatch({
              type: "ADD_PRODUCT",
              payload: {
                product,
              },
            })
          }
        >
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
