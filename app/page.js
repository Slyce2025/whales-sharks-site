import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      <section id="story" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-abyss mb-8">
            Move with Depth.<br />
            <span className="text-gold italic">Strike with Precision.</span>
          </h2>
          
          <div className="text-lg text-shark mb-12 max-w-2xl mx-auto">
            <p className="text-xl mb-6 font-light">
              Whales and Sharks was built on a simple idea: power and comfort should exist in the same form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="border-l-2 border-gold pl-6 py-2">
              <h3 className="font-serif text-2xl text-abyss mb-2">The Whale</h3>
              <p className="text-xs uppercase tracking-widest text-gold mb-3">Depth & Wisdom</p>
              <p className="text-sm text-shark">Calm authority. Strategic movement.</p>
            </div>
            <div className="border-l-2 border-gold pl-6 py-2">
              <h3 className="font-serif text-2xl text-abyss mb-2">The Shark</h3>
              <p className="text-xs uppercase tracking-widest text-gold mb-3">Power & Precision</p>
              <p className="text-sm text-shark">Apex predator mindset. Forward momentum.</p>
            </div>
          </div>

          <p className="mt-12 text-abyss font-serif text-xl italic">
            "This is not hype clothing. This is identity wear."
          </p>
        </div>
      </section>

      <section className="py-20 bg-abyss text-center px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
          Ready to Join the Apex?
        </h2>
        <a 
          href="/shop"
          className="inline-block px-10 py-4 bg-gold text-abyss font-medium tracking-wider uppercase hover:bg-white transition rounded-sm"
        >
          Shop the Founder Drop
        </a>
      </section>
    </main>
  );
}
