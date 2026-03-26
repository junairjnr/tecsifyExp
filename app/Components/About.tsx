// import Image from "next/image";

// export default function About() {
//   return (
//     <section id="about">
//       <div className="about-grid">
//         <div className="about-img-wrap reveal">
//           <Image
//             src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80"
//             alt="Kerala coconut farm"
//             className="about-img-main"
//           />
//           <div className="about-img-badge">
//             <strong>15+</strong>
//             <span>Years of Trust</span>
//           </div>
//         </div>
//         <div className="reveal">
//           <span className="section-tag">About Us</span>
//           <h2 className="section-title">Rooted in Kerala's Coconut Heritage</h2>
//           <div className="section-divider"></div>

//           <p
//             style={{
//               fontSize: "0.95rem",
//               color: "var(--text-mid)",
//               lineHeight: "1.8",
//               marginBottom: "16px",
//             }}
//           >
//             Tecsify Exportings was born from a deep passion for Kerala's
//             greatest natural treasure — the coconut. Established in Tirur,
//             Malappuram, we've spent over 15 years building relationships with
//             the finest coconut farmers across the Malabar Coast.
//           </p>

//           <p
//             style={{
//               fontSize: "0.95rem",
//               color: "var(--text-mid)",
//               lineHeight: "1.8",
//             }}
//           >
//             Today, we're one of Kerala's trusted coconut export houses —
//             sourcing directly from farmers, processing in our certified
//             facility, and delivering to global markets with transparency,
//             consistency, and care.
//           </p>

//           <div className="mission-vision">
//             <div className="mv-card">
//               <h4>🎯 Our Mission</h4>
//               <p>
//                 To connect Kerala's finest coconut produce to the world's
//                 markets, delivering unmatched quality and reliability with every
//                 shipment.
//               </p>
//             </div>
//             <div className="mv-card">
//               <h4>🌟 Our Vision</h4>
//               <p>
//                 To be India's most trusted coconut export brand, synonymous with
//                 purity, sustainability, and global quality standards.
//               </p>
//             </div>
//           </div>
//           <div className="about-features">
//             <div className="about-feat">
//               <span className="about-feat-icon">🌱</span>
//               <div className="about-feat-text">
//                 <strong>Direct Farm Sourcing</strong>
//                 <span>500+ farmer partnerships in Kerala</span>
//               </div>
//             </div>
//             <div className="about-feat">
//               <span className="about-feat-icon">🔬</span>
//               <div className="about-feat-text">
//                 <strong>Lab-Tested Quality</strong>
//                 <span>Every batch is tested before export</span>
//               </div>
//             </div>
//             <div className="about-feat">
//               <span className="about-feat-icon">📦</span>
//               <div className="about-feat-text">
//                 <strong>Custom Packaging</strong>
//                 <span>Branded & buyer-label options</span>
//               </div>
//             </div>
//             <div className="about-feat">
//               <span className="about-feat-icon">🚢</span>
//               <div className="about-feat-text">
//                 <strong>Reliable Logistics</strong>
//                 <span>FOB, CIF, EXW terms available</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import rootImage from '../../public/assets/thenga_image.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={rootImage}
              alt="Kerala coconut farm"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow-lg">
            <strong className="block text-lg text-green-800">15+</strong>
            <span className="text-xs text-gray-600">Years of Trust</span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Rooted in Kerala's Coconut Heritage</h2>
          <div className="section-divider"></div>

          <p className="text-sm text-gray-600 leading-7 mb-4">
            Tecsify Exportings was born from a deep passion for Kerala's
            greatest natural treasure — the coconut. Established in Tirur,
            Malappuram, we've spent over 15 years building relationships with
            the finest coconut farmers across the Malabar Coast.
          </p>

          <p className="text-sm text-gray-600 leading-7">
            Today, we're one of Kerala's trusted coconut export houses —
            sourcing directly from farmers, processing in our certified
            facility, and delivering to global markets with transparency,
            consistency, and care.
          </p>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="p-5 rounded-xl bg-green-50 border">
              <h4 className="font-semibold mb-2">🎯 Our Mission</h4>
              <p className="text-sm text-gray-600">
                To connect Kerala's finest coconut produce to the world's
                markets, delivering unmatched quality and reliability.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-yellow-50 border">
              <h4 className="font-semibold mb-2">🌟 Our Vision</h4>
              <p className="text-sm text-gray-600">
                To be India's most trusted coconut export brand, known for
                sustainability and global standards.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              {
                icon: "🌱",
                title: "Direct Farm Sourcing",
                desc: "500+ farmer partnerships in Kerala",
              },
              {
                icon: "🔬",
                title: "Lab-Tested Quality",
                desc: "Every batch is tested before export",
              },
              {
                icon: "📦",
                title: "Custom Packaging",
                desc: "Branded & buyer-label options",
              },
              {
                icon: "🚢",
                title: "Reliable Logistics",
                desc: "FOB, CIF, EXW terms available",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start p-4 rounded-lg border hover:shadow-md transition"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <strong className="text-sm">{item.title}</strong>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}