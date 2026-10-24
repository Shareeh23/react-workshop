import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto flex min-h-[70svh] flex-col justify-center px-6 py-16">
        <div className="max-w-2xl space-y-6"> 
        <div className="space-y-3"> 
          <p className="text-sm font-medium text-muted-foreground">
            Welcome to MiniShop 
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Find something you love.
          </h1>
          <p className="max-w-xl leading-relaxed text-muted-foreground">
            Discover our collection of products, explore different categories,
            and find something that fits your style.
          </p>
        </div>
        <div>
          <Button nativeButton={false} render={<Link href="/products" />}>
            Browse Products
          </Button>
        </div>
      </div>
      <section className="mt-20 grid gap-8 border-t pt-8 sm:grid-cols-3">
        <div className="space-y-2">
          <h2 className="font-medium">Explore Products</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Browse our collection and discover available products.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-medium">Discover Details</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Learn more about individual products before making a choice.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-medium">Simple Shopping</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Enjoy a straightforward way to explore the store.
          </p>
        </div>
      </section>
    </div>
  );
}
