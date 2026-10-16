import { useState, useEffect } from "react";

const URL =
  "https://dummyjson.com/products?limit=9&select=id,title,description,brand,category,price,discountPercentage,tags,thumbnail";

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  thumbnail: string;
};

type ProductCollection = Product[];

type ProductsResponse = {
  products: ProductCollection;
  total: number;
  skip?: number;
  limit?: number;
};

export function App() {
  const [products, setProducts] = useState<ProductCollection>([]);

  useEffect(() => {
    const controller= new AbortController();

    async function fetchProducts() {
      try {
        const response = await fetch(URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }

        const data: ProductsResponse = await response.json();

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
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

export default App;
