import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <main className="container mx-auto flex min-h-[70svh] flex-col items-center justify-center gap-4 px-6 text-center">
      <ShoppingBag className="size-12 text-muted-foreground" />
      <h1 className="text-3xl font-semibold tracking-tight">
        Your cart is empty
      </h1>
      <p className="max-w-md text-muted-foreground">
        Looks like you haven't added anything to your cart yet. Explore our
        products and find something you like.
      </p>
      <Button nativeButton={false} render={<Link href="/products" />}>
        Browse Products
      </Button>
    </main>
  );
}
