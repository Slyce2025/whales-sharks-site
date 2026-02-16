import { getProductDetails } from '@/lib/printful';
import Navigation from '@/components/Navigation';
import AddToCart from '@/components/AddToCart';

export default async function ProductPage({ params }) {
  const product = await getProductDetails(params.id);
  const variant = product.sync_variants?.[0];
  
  return (
    <div className="min-h-screen bg-foam">
      <Navigation />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-gray-100 relative shadow-lg">
            {product.thumbnail_url ? (
              <img 
                src={product.thumbnail_url} 
                alt={product.name}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
        </div>

        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-gold uppercase tracking-widest text-xs mb-2">
            Founder Drop • {product.sync_variants?.length} Options
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl text-abyss mb-4 leading-tight">
            {product.name.replace('Whales and Sharks - ', '')}
          </h1>
          
          <p className="text-2xl text-abyss mb-6 font-light">
            ${variant?.retail_price || '89.00'}
          </p>

          <div className="mb-8 text-shark">
            <p className="text-lg text-abyss font-medium mb-4">
              Luxury presence. Everyday wear.
            </p>
            <p className="mb-6">
              Designed for those who carry authority without noise. 
              Premium-weight fabric with signature embossed crest.
            </p>
          </div>

          <ul className="space-y-3 mb-8 text-sm text-shark border-y border-gray-200 py-6">
            <li className="flex items-start">
              <span className="text-gold mr-3">◆</span>
              Premium cotton blend for structure and comfort
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">◆</span>
              Signature Whales & Sharks embossed crest
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">◆</span>
              Street-luxury silhouette fit
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">◆</span>
              Ships in 2-5 business days via Printful
            </li>
          </ul>

          <AddToCart product={product} variant={variant} />
          
          <p className="text-xs text-shark/60 mt-4 text-center">
            Free shipping on orders over $100. 30-day satisfaction guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
