export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type ProductDetails = Product & {
  description: string;
  images: string[];
  category: string;
  stock: number;
  brand: string;
  discountPercentage: number;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
};