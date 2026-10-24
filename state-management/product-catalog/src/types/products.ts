export type Product = {
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

export type ProductCollection = Product[];

export type FetchResponse = {
  products: ProductCollection;
  total: number;
  skip?: number;
  limit?: number;
};