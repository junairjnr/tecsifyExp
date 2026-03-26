export default function Quality() {
  return (
    <section id="quality">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="text-center reveal" style={{ marginBottom: "60px" }}>
          <span className="section-tag">Export & Quality</span>
          <h2 className="section-title">Certified. Consistent. Trusted.</h2>
          <div className="section-divider"></div>
          <p className="section-sub">
            Our quality control systems and certifications ensure every shipment
            meets international food safety and quality standards.
          </p>
        </div>

        <div className="quality-layout">
          <div className="reveal">
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.4rem",
                color: "var(--green-deep)",
                marginBottom: "8px",
              }}
            >
              Our Certifications
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-light)",
                marginBottom: "4px",
              }}
            >
              Recognized by global regulatory bodies and import authorities.
            </p>

            <div className="cert-grid">
              <div className="cert-card">
                <span className="cert-icon">🏅</span>
                <div>
                  <div className="cert-name">FSSAI Certified</div>
                  <div className="cert-detail">
                    Food Safety & Standards Authority of India
                  </div>
                </div>
              </div>

              <div className="cert-card">
                <span className="cert-icon">🌐</span>
                <div>
                  <div className="cert-name">ISO 22000</div>
                  <div className="cert-detail">
                    Food Safety Management System
                  </div>
                </div>
              </div>

              <div className="cert-card">
                <span className="cert-icon">🌿</span>
                <div>
                  <div className="cert-name">Organic Certified</div>
                  <div className="cert-detail">NPOP / EU / USDA Organic</div>
                </div>
              </div>

              <div className="cert-card">
                <span className="cert-icon">🛡️</span>
                <div>
                  <div className="cert-name">Phytosanitary</div>
                  <div className="cert-detail">
                    NPPO Certified Export Clearance
                  </div>
                </div>
              </div>

              <div className="cert-card">
                <span className="cert-icon">⚓</span>
                <div>
                  <div className="cert-name">APEDA Registered</div>
                  <div className="cert-detail">
                    Agri & Processed Food Export Dev.
                  </div>
                </div>
              </div>

              <div className="cert-card">
                <span className="cert-icon">✅</span>
                <div>
                  <div className="cert-name">HACCP</div>
                  <div className="cert-detail">
                    Hazard Analysis Critical Control Point
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.4rem",
                color: "var(--green-deep)",
                marginBottom: "8px",
              }}
            >
              Quality Control Process
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-light)",
                marginBottom: "20px",
              }}
            >
              From grove to port, every step is monitored and documented.
            </p>

            <div className="quality-process">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Farm-Level Sourcing</h4>
                  <p>
                    Direct procurement from 500+ registered farmers. Each farm
                    is periodically audited for pesticide usage and harvest
                    practices.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Grading & Sorting</h4>
                  <p>
                    Mechanical and manual grading for size, weight, and defects.
                    Only Grade A produce advances to processing and packaging.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Processing & Fumigation</h4>
                  <p>
                    Cold storage, drying, and fumigation as per destination
                    country requirements including ISPM-15 treated wooden
                    crates.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Lab Testing & Certification</h4>
                  <p>
                    Third-party lab tests for moisture, FFA, microbial, and
                    pesticide residue. Certificates of Analysis provided with
                    each shipment.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-num">05</div>
                <div className="step-content">
                  <h4>Packaging & Shipping</h4>
                  <p>
                    Custom or standard packaging, containerized and reefer
                    shipping from Kochi, Nhava Sheva, or Mundra ports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="logistics-banner reveal">
          <div>
            <h3>Global Shipping & Logistics</h3>
            <p>
              We handle end-to-end export logistics — documentation, customs
              clearance, shipping line coordination, and buyer-specific
              compliance for smooth, on-time delivery worldwide.
            </p>

            <div className="logistics-flags">
              <span className="flag-item">🇦🇪 UAE</span>
              <span className="flag-item">🇸🇦 Saudi Arabia</span>
              <span className="flag-item">🇲🇾 Malaysia</span>
              <span className="flag-item">🇬🇧 UK</span>
              <span className="flag-item">🇩🇪 Germany</span>
              <span className="flag-item">🇺🇸 USA</span>
              <span className="flag-item">🇸🇬 Singapore</span>
              <span className="flag-item">+ 23 more</span>
            </div>
          </div>

          <div
            style={{
              flexShrink: 0,
              textAlign: "center",
              padding: "28px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              minWidth: "200px",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🚢</div>

            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.6rem",
                color: "var(--gold)",
                fontWeight: 700,
              }}
            >
              FCL & LCL
            </div>

            <div
              style={{
                fontSize: "0.78rem",
                opacity: 0.7,
                marginTop: "4px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Shipping Options
            </div>

            <div
              style={{ marginTop: "16px", fontSize: "0.78rem", opacity: 0.6 }}
            >
              FOB · CIF · EXW · CFR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
