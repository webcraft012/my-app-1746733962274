'use client';

import React from 'react';
import { useCart } from '@/lib/store/cart-context';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {
        cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border rounded-lg p-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded-md mr-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded-md ml-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-xl font-bold mt-4">
              Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default CartPage;