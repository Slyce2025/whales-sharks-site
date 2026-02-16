import { getProducts } from '@/lib/printful';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-foam pt-32 pb-20">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm mb-4">Founder Drop 001</p>
          <h1 className="font-serif text-5xl text-abyss mb-4">Apex Collection</h1>
          <p className="text-shark max-w-xl mx-auto">Limited runs. Premium construction. Identity wear.</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p>Loading products... (Make sure your Printful API key is connected)</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/shop/${product.id}`}
                className="group block"
              >
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden mb-4 shadow-lg">
                  {product.thumbnail_url ? (
                    <img 
                      src={product.thumbnail_url} 
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-abyss text-white text-xs px-3 py-1 uppercase tracking-wider">
                    Limited
                  </div>
                </div>
                
                <h3 className="font-serif text-xl text-abyss mb-2 group-hover:text-gold transition">
                  {product.name.replace('Whales and Sharks - ', '')}
                </h3>
                <p className="text-shark text-sm mb-2">Apex Comfort Wear</p>
                <p className="text-abyss font-medium">
                  From ${product.variants?.[0]?.retail_price || '89.00'}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
