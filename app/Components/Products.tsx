"use client";

import Image from "next/image";

export default function Products() {
  return (
    <section id="products">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="text-center reveal">
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">
            Nature's Best, Certified for the World
          </h2>
          <div className="section-divider"></div>
          <p className="section-sub">
            Premium coconut products sourced from Kerala's fertile groves,
            processed with care, and packaged to international standards for
            buyers worldwide.
          </p>
        </div>

        <div className="products-grid">
          {/* Product Card */}
          {[
            {
              img: "/assets/thenga_image.jpg",
              name: "Fresh Coconut",
              tag: "Best Seller",
            },
            {
              img: "/assets/coconut-oil.jpg",
              name: "Coconut Oil (VCO & RBD)",
              tag: "Premium",
            },
            {
              img: "/assets/copra.jpg",
              name: "Copra (Dried Coconut)",
              tag: "Export Grade",
            },
            {
              img: "/assets/desiccated-Coconut-Powder.jpg",
              name: "Desiccated Coconut Powder",
              tag: "Food Grade",
            },
            {
              img: "/assets/charcoal.jpg",
              name: "Coconut Shell & Charcoal",
              tag: "Eco Product",
            },
          ].map((item, i) => (
            <div key={i} className="product-card reveal">
              {/* Image */}
              <div className="product-img-wrap relative w-full h-[200px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="product-img object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span className="product-tag">{item.tag}</span>
              </div>

              {/* Body */}
              <div className="product-body">
                <div className="product-name">{item.name}</div>

                <p className="product-desc">
                  Premium quality coconut product processed and packed for
                  global export markets with strict quality control.
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="product-card reveal"
            style={{
              background:
                "linear-gradient(135deg,var(--green-deep),var(--green-mid))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📩</div>

            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "12px",
              }}
            >
              Custom Product Inquiry
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.7",
                marginBottom: "24px",
              }}
            >
              Need a specific coconut product or custom packaging? Our team is
              ready to handle bespoke requirements for all markets.
            </p>

            <a
              href="#contact"
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "12px 24px" }}
            >
              Send Inquiry →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
