import Link from "next/link";

const products = [
  { id: "1", name: "Classic T-Shirt", price: 2500 },
  { id: "2", name: "Everyday Backpack", price: 6500 },
  { id: "3", name: "Minimalist Watch", price: 8500 },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto space-y-6 px-6 py-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
        <p className="text-muted-foreground">
          Explore our collection of products.
        </p>
      </div>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border-b pb-4">
            <Link
              href={`/products/${product.id}`}
              className="font-medium hover:underline"
            >
              {product.name}
            </Link>

            <p className="mt-1 text-sm text-muted-foreground">
              LKR {product.price.toLocaleString("en-LK")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
