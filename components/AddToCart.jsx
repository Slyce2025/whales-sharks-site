'use client';

import { useState } from 'react';

export default function AddToCart({ product, variant }) {
  const [size, setSize] = useState(variant?.size || 'M');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            name: product.name,
            price: variant.retail_price,
            image: product.thumbnail_url,
            size: size
          }]
        }),
      });
      
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      alert('Checkout error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium uppercase tracking-wider mb-3 text-abyss">
          Select Size
        </label>
        <div className="grid grid-cols-4 gap-3">
          {['S', 'M', 'L', 'XL'].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`py-3 border rounded-sm font-medium transition ${
                size === s 
                  ? 'border-gold bg-gold/10 text-gold' 
                  : 'border-shark/20 hover:border-gold'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-abyss text-white py-4 rounded-sm font-medium tracking-wider uppercase hover:bg-shark transition disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Join the Apex Circle — Buy Now'}
      </button>
    </div>
  );
}
