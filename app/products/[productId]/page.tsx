'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProducts } from '@/lib/mock/products';
import { Product } from '@/lib/types/product';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find(p => p.id === productId);
      setProduct(foundProduct || null);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="container mx-auto py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          {/* Future: Add to Cart button */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;