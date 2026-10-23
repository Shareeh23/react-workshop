import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ShoppingBag className="size-5" /> <span>MiniShop</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
            Home
          </Button>

          <Button variant="ghost" nativeButton={false} render={<Link href="/products" />}>
            Products
          </Button>

          <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
            About
          </Button>
        </nav>
      </div>
    </header>
  );
}
