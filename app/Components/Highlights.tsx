export default function HighLights() {
  return (
    <div className="highlights">
      <div className="highlights-grid">
        <div className="highlight-card reveal">
          <span className="highlight-icon">🏆</span>
          <div className="highlight-title">Export-Grade Quality</div>
          <p className="highlight-desc">
            Every batch undergoes rigorous quality checks — from farm to freight
            — ensuring consistent excellence in every shipment.
          </p>
        </div>
        <div className="highlight-card reveal">
          <span className="highlight-icon">🌍</span>
          <div className="highlight-title">Global Distribution</div>
          <p className="highlight-desc">
            We ship to the Middle East, Europe, Southeast Asia, and beyond with
            reliable logistics and on-time delivery guarantees.
          </p>
        </div>
        <div className="highlight-card reveal">
          <span className="highlight-icon">📜</span>
          <div className="highlight-title">Certified & Compliant</div>
          <p className="highlight-desc">
            FSSAI, ISO, Organic, and Phytosanitary certified. Fully compliant
            with destination country import regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
