 'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const [billingAddress, setBillingAddress] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prevState => ({ ...prevState, [name]: value }));
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingAddress(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.name} />
            <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.address} />
            <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.city} />
            <input type="text" name="zip" placeholder="Zip Code" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.zip} />
            <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.country} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Billing Information</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.name} />
            <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.address} />
            <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.city} />
            <input type="text" name="zip" placeholder="Zip Code" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.zip} />
            <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.country} />
          </div>
        </div>
      </div>


  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.name} />
            <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.address} />
            <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.city} />
            <input type="text" name="zip" placeholder="Zip Code" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.zip} />
            <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" onChange={handleShippingChange} value={shippingAddress.country} />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Billing Information</h3>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.name} />
            <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.address} />
            <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.city} />
            <input type="text" name="zip" placeholder="Zip Code" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.zip} />
            <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" onChange={handleBillingChange} value={billingAddress.country} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Shipping Method</h3>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="shippingMethod" value="standard" className="mr-2" />
            Standard Shipping (3-5 days)
          </label>
          <label>
            <input type="radio" name="shippingMethod" value="express" className="mr-2" />
            Express Shipping (1-2 days)
          </label>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
        <div className="space-y-4">
          <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full p-2 border rounded" />
            <input type="text" placeholder="CVV" className="w-full p-2 border rounded" />
          </div>
          <input type="text" placeholder="Name on Card" className="w-full p-2 border rounded" />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handlePlaceOrder}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );

