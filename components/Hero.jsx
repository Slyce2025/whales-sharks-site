export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-abyss">
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-abyss/40 to-abyss z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
          Founder Drop 001
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          Apex Comfort.<br />
          <span className="italic text-gold">Everyday Power.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Luxury-casual wear built for depth, precision, and presence. 
          Move like power. Live in comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/shop" 
            className="px-10 py-4 bg-gold text-abyss font-medium tracking-wider uppercase hover:bg-white transition rounded-sm"
          >
            Enter the Drop
          </a>
          <a 
            href="#story" 
            className="px-10 py-4 border border-white/30 text-white font-medium tracking-wider uppercase hover:border-gold hover:text-gold transition rounded-sm"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
