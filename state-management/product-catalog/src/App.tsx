import { useState, useEffect } from "react";

import type { ProductCollection, FetchResponse } from "./types/products";

import ProductGrid from "./components/products/ProductGrid";
import CartSidebar from "./components/cart/CartSidebar";

const URL =
  "https://dummyjson.com/products?limit=9&select=id,title,description,brand,category,price,discountPercentage,tags,thumbnail";

export function App() {
  const [products, setProducts] = useState<ProductCollection>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }

        const data: FetchResponse = await response.json();

        setProducts(data.products);
        return products;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error(err);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [products]);

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Products */}
          <div className="min-w-0 flex-1">
            <ProductGrid products={products} />
          </div>

          {/* Shopping cart */}
          <CartSidebar />
        </div>
      </div>
    </main>
  );
}

export default App;
