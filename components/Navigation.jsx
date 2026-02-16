export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-abyss/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl text-white tracking-wide">
          Whales <span className="text-gold">&</span> Sharks
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase text-white/80">
          <a href="/shop" className="hover:text-gold transition">Shop</a>
          <a href="/#story" className="hover:text-gold transition">Story</a>
          <a href="/#club" className="hover:text-gold transition">Predators Club</a>
        </div>

        <a 
          href="/shop" 
          className="px-6 py-2 bg-gold text-abyss font-medium text-sm uppercase tracking-wider hover:bg-white transition rounded-sm"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}
