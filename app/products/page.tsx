'use client';

import React from 'react';
'use client';

import React, { useEffect, useState } from 'react';
import { getProducts } from '@/lib/mock/products';
import { Product } from '@/lib/types/product';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
  );
};

export default ProductsPage;