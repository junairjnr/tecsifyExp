export default function Hero() {
  return (
    // <section
    //   className="h-screen flex items-center justify-center text-center text-white"
    //   style={{
    //     backgroundImage:
    //       "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1587735243615-c03f25aaff15')",
    //     backgroundSize: "cover",
    //   }}
    // >
    //   <div>
    //     <h1 className="text-5xl font-serif mb-4">
    //       Premium Coconut Exporters
    //     </h1>
    //     <p className="mb-6">From Kerala to the World 🌍</p>
    //     <a href="#contact" className="bg-gold px-6 py-3 rounded-full text-black">
    //       Get Quote
    //     </a>
    //   </div>
    // </section>

    <section id="home">
      <div className="hero-content">
        <div className="hero-badge">Kerala's Finest Since 2008</div>
        <h1 className="hero-title">
          Premium Quality <em>Coconut</em> Exporters from Kerala
        </h1>
        <p className="hero-sub">
          Sourced from the lush coconut groves of Kerala, certified and packed
          to meet the highest international standards. Trusted by buyers in 30+
          countries worldwide.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            📋 Get a Quote
          </a>
          <a href="#products" className="btn-outline">
            🥥 View Products
          </a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">15+</div>
          <div className="stat-label">Years of Export</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">30+</div>
          <div className="stat-label">Countries Served</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5000+</div>
          <div className="stat-label">Tons Exported / Year</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">Certified Quality</div>
        </div>
      </div>
    </section>
  );
}
