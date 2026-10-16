import type { Product } from "@/types/products";
import ProductCard from "@/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="min-w-0 space-y-6">
      {/* Section heading */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>

        <p className="mt-2 text-muted-foreground">
          Discover our collection and find something you love.
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
