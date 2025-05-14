import { Product } from "@/lib/types/product";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is a description for product 1.',
    price: 19.99,
    imageUrl: '/api/placeholder.svg?width=300&height=300',
    category: 'category1',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is a description for product 2.',
    price: 29.99,
    imageUrl: '/api/placeholder.svg?width=300&height=300',
    category: 'category2',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is a description for product 3.',
    price: 39.99,
    imageUrl: '/api/placeholder.svg?width=300&height=300',
    category: 'category1',
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'This is a description for product 4.',
    price: 49.99,
    imageUrl: '/api/placeholder.svg?width=300&height=300',
    category: 'category3',
  },
];

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};
