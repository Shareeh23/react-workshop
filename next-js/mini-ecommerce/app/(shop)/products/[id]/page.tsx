import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    id: "1",
    name: "Classic T-Shirt",
    price: 2500,
    description: "A comfortable everyday T-shirt with a classic fit.",
  },
  {
    id: "2",
    name: "Everyday Backpack",
    price: 6500,
    description: "A practical backpack for everyday use.",
  },
  {
    id: "3",
    name: "Minimalist Watch",
    price: 8500,
    description: "A simple, timeless watch for everyday wear.",
  },
];

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto space-y-6 px-6 py-12">
      <Link
        href="/products"
        className="text-sm text-muted-foreground hover:underline"
      >
        ← Back to Products
      </Link>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          {product.name}
        </h1>

        <p className="text-lg font-medium">
          LKR {product.price.toLocaleString("en-LK")}
        </p>

        <p className="max-w-xl text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}
