export default function Testimonials() {
  return (
    <section id="testimonials">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="text-center reveal">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Trusted by Buyers Across the Globe</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "We've been sourcing fresh coconuts from Tecsify for over 3 years.
              The consistency in quality and their responsive communication
              makes them stand out among all our Indian suppliers."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">A</div>
              <div>
                <div className="author-name">Ahmed Al-Rashidi</div>
                <div className="author-loc">
                  🇦🇪 Dubai, UAE — Fresh Produce Importer
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "The VCO from Tecsify Exportings has been our go-to for our
              organic cosmetics line. Lab-certified, consistent quality, and
              always on time. Highly recommend."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Sophie Hartmann</div>
                <div className="author-loc">
                  🇩🇪 Hamburg, Germany — Organic Products Buyer
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "As a bakery chain, we need consistent desiccated coconut powder
              year-round. Tecsify has never let us down in 4 years of
              partnership. Excellent quality controls."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">R</div>
              <div>
                <div className="author-name">Raj Krishnamurthy</div>
                <div className="author-loc">
                  🇲🇾 Kuala Lumpur — Food Manufacturing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="countries-served reveal">
          <h4>Countries We Export To</h4>
          <div className="countries-list">
            <span className="country-badge">🇦🇪 UAE</span>
            <span className="country-badge">🇸🇦 Saudi Arabia</span>
            <span className="country-badge">🇴🇲 Oman</span>
            <span className="country-badge">🇶🇦 Qatar</span>
            <span className="country-badge">🇲🇾 Malaysia</span>
            <span className="country-badge">🇸🇬 Singapore</span>
            <span className="country-badge">🇬🇧 United Kingdom</span>
            <span className="country-badge">🇩🇪 Germany</span>
            <span className="country-badge">🇫🇷 France</span>
            <span className="country-badge">🇺🇸 United States</span>
            <span className="country-badge">🇦🇺 Australia</span>
            <span className="country-badge">🇯🇵 Japan</span>
            <span className="country-badge">🇰🇷 South Korea</span>
            <span className="country-badge">🇨🇳 China</span>
            <span className="country-badge">+ 16 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
