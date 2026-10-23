import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Package,
  RotateCcw,
  ShieldCheck,
  Star,
} from "lucide-react";

import { ProductDetails } from "@/types/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}?select=id,title,price,thumbnail,rating,description,images,category,stock,brand,discountPercentage,availabilityStatus,shippingInformation,warrantyInformation,returnPolicy`,
  );

  if (!response.ok) {
    notFound();
  }

  const product: ProductDetails = await response.json();

  const isInStock = product.stock > 0;

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:py-12">
      <Button
        variant="ghost"
        nativeButton={false}
        render={<Link href="/products" />}
        className="mb-8 -ml-3"
      >
        <ArrowLeft className="size-4" />
        Back to Products
      </Button>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Product image */}
        <Card className="overflow-hidden rounded-xl border-0 bg-muted/40 shadow-none">
          <CardContent className="relative flex aspect-square items-center justify-center p-6 sm:p-10">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6 sm:p-10"
            />

            {product?.discountPercentage > 0 && (
              <Badge className="absolute left-4 top-4 z-10">
                {Math.round(product.discountPercentage)}% OFF
              </Badge>
            )}
          </CardContent>
        </Card>

        {/* Product information */}
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="capitalize">
              {product.category}
            </Badge>

            {product.brand && (
              <span className="text-sm text-muted-foreground">
                by {product.brand}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Customer rating
            </span>
          </div>

          <Separator className="my-6" />

          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-semibold">
              ${product.price.toFixed(2)}
            </p>

            {product.discountPercentage > 0 && (
              <p className="text-sm text-muted-foreground line-through">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            )}
          </div>

          <p className="mt-6 leading-7 text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-6 flex items-center gap-2">
            {isInStock ? (
              <>
                <Check className="size-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  In stock
                </span>
                <span className="text-sm text-muted-foreground">
                  ({product.stock} available)
                </span>
              </>
            ) : (
              <Badge variant="destructive">Out of stock</Badge>
            )}
          </div>

          <Button
            className="mt-6 w-full sm:w-fit"
            size="lg"
            disabled={!isInStock}
          >
            Add to Cart
          </Button>

          <Separator className="my-8" />

          {/* Additional product information */}
          <div className="space-y-5">
            <div className="flex gap-3">
              <Package className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Shipping</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.shippingInformation ||
                    "Shipping information unavailable"}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Warranty</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.warrantyInformation ||
                    "Warranty information unavailable"}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <RotateCcw className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
              <div>
                <p className="font-medium">Returns</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.returnPolicy || "Return information unavailable"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
