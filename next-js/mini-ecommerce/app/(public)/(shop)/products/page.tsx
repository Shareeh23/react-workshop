import Image from "next/image";
import Link from "next/link";
import { ProductsResponse } from "@/types/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddToCartButton } from "@/components/feature/add-to-cart-btn";

export default async function ProductsPage() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=16&skip=20&select=id,title,price,thumbnail,rating",
    {
      cache: "force-cache",
      next: { tags: ["products"], revalidate: 60 },
    },
  );

  if (!response.ok) throw new Error("Failed to fetch products.");

  const data: ProductsResponse = await response.json();

  return (
    <main className="container mx-auto space-y-6 px-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
        <p className="text-muted-foreground">
          Explore our collection of products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain p-4"
                />
              </div>
            </Link>

            <CardHeader>
              <CardTitle className="line-clamp-2 text-base">
                <Link
                  href={`/products/${product.id}`}
                  className="hover:underline"
                >
                  {product.title}
                </Link>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  ★ {product.rating}
                </p>
              </div>

              <AddToCartButton productId={product.id} className="w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
