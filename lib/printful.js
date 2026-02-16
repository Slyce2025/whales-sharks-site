// This runs ONLY on the server to protect your API key
const PRINTFUL_API = 'https://api.printful.com';

export async function getProducts() {
  const res = await fetch(`${PRINTFUL_API}/store/products`, {
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.result || [];
}

export async function getProductDetails(id) {
  const res = await fetch(`${PRINTFUL_API}/store/products/${id}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch product');
  const data = await res.json();
  return data.result;
}
