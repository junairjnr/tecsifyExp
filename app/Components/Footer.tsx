export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a
            href="#home"
            className="nav-logo"
            style={{ textDecoration: "none" }}
          >
            <div
              className="nav-logo-icon"
              style={{ width: "42px", height: "42px" }}
            >
              🥥
            </div>
            <div
              className="nav-logo-text"
              style={{ color: "white", fontSize: "1.3rem" }}
            >
              Tecsify Exportings
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                Kerala, India
              </span>
            </div>
          </a>

          <p className="footer-desc">
            Premium quality coconut and coconut-based products sourced directly
            from Kerala's finest farms. Trusted by global buyers across 30+
            countries.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-link" title="LinkedIn">
              in
            </a>
            <a href="#" className="social-link" title="Instagram">
              ig
            </a>
            <a href="#" className="social-link" title="Facebook">
              fb
            </a>
            <a
              href="https://wa.me/919876543210"
              className="social-link"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              wa
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#quality">Export & Quality</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Our Products</h5>
          <ul className="footer-links">
            <li>
              <a href="#products">Fresh Coconut</a>
            </li>
            <li>
              <a href="#products">Coconut Oil (VCO)</a>
            </li>
            <li>
              <a href="#products">Copra</a>
            </li>
            <li>
              <a href="#products">Desiccated Coconut</a>
            </li>
            <li>
              <a href="#products">Coconut Shell</a>
            </li>
            <li>
              <a href="#products">Activated Charcoal</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>

          <div className="footer-contact-item">
            {/* <span>📍</span>
        <span>Tirur, Malappuram, Kerala 676101</span> */}
            <div className="footer-contact-item flex flex-col gap-2">
              <span>📍 Thalakkadathur, Tirur, Malappuram, Kerala 676103</span>
            </div>
          </div>

          <div className="footer-contact-item">
            <span>📞</span>
            <span>+91 995390 18161</span>
          </div>

          <div className="footer-contact-item">
            <span>📧</span>
            <span>exports@tecsify.com</span>
          </div>

          <div className="footer-contact-item" style={{ marginTop: "8px" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                fontSize: "0.8rem",
                padding: "10px 20px",
                display: "inline-flex",
              }}
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Tecsify Exportings. All rights reserved.</span>
        <span>FSSAI · ISO 22000 · APEDA · HACCP Certified</span>
      </div>
    </footer>
  );
}
