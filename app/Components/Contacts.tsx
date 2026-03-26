"use client";

export default function Contact() {
  return (
    // <section id="contact" classNameName="py-20">
    //   <h2 classNameName="text-3xl text-center font-serif mb-10">
    //     Contact Us
    //   </h2>

    //   <form classNameName="max-w-xl mx-auto space-y-4">
    //     <input placeholder="Name" classNameName="w-full p-3 border rounded" />
    //     <input placeholder="Email" classNameName="w-full p-3 border rounded" />
    //     <textarea placeholder="Message" classNameName="w-full p-3 border rounded" />
    //     <button classNameName="bg-greenMid text-white px-6 py-3 rounded w-full">
    //       Send Inquiry
    //     </button>
    //   </form>
    // </section>
    <section id="contact">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="text-center reveal" style={{ marginBottom: "60px" }}>
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Ready to Start Exporting?</h2>
          <div className="section-divider"></div>
          <p className="section-sub">
            Reach out to our export team with your requirements. We'll respond
            within 24 hours with a customized quotation.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <div>
                <div className="contact-detail-title">Office Address</div>
                <div className="contact-detail-val">
                  Tecsify Exportings
                  <br />
                  Thalakkadathur, Tirur, Malappuram District
                  <br />
                  Kerala, India — 676 103
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">📞</div>
              <div>
                <div className="contact-detail-title">Phone & WhatsApp</div>
                <div className="contact-detail-val">
                  <a href="tel:+919876543210">+91 95390 18161</a>
                  <br />
                  <a
                    href="https://wa.me/919539018161"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Chat →
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">📧</div>
              <div>
                <div className="contact-detail-title">Email</div>
                <div className="contact-detail-val">
                  <a href="mailto:junairjunu869@gmail.com">
                    exports@tecsify.com
                  </a>
                  <br />
                  <a href="mailto:junairjunu869@gmail.com">
                    inquiry@tecsify.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">🕐</div>
              <div>
                <div className="contact-detail-title">Business Hours</div>
                <div className="contact-detail-val">
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM IST
                </div>
              </div>
            </div>

            <div className="">
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Thalakkadathur,Malappuram,Kerala&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="contact-form">
              <div className="form-title">Send an Inquiry</div>
              <p className="form-sub">
                Fill in your details and we'll get back with a personalized
                quote.
              </p>

              <form id="inquiryForm">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" placeholder="Your company" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input type="tel" placeholder="+91........" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Country *</label>
                    <select required>
                      <option value="">Select country</option>
                      <option>United Arab Emirates</option>
                      <option>Saudi Arabia</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>United States</option>
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Australia</option>
                      <option>Japan</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Product Interest</label>
                    <select>
                      <option value="">Select product</option>
                      <option>Fresh Coconut</option>
                      <option>Coconut Oil (VCO/RBD)</option>
                      <option>Copra</option>
                      <option>Desiccated Coconut Powder</option>
                      <option>Coconut Shell / Charcoal</option>
                      <option>Multiple Products</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Requirement</label>
                  <textarea placeholder="Please describe your requirements — quantity, packaging preference, destination port, etc."></textarea>
                </div>

                <button type="submit" className="form-submit">
                  📤 Submit Inquiry
                </button>
              </form>

              <div className="form-success" id="formSuccess">
                ✅ Thank you! Your inquiry has been received. Our export team
                will contact you within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
