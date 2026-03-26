// import Image from "next/image";

// export default function Gallery() {
//   return (
//     <section id="gallery">
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div className="text-center reveal">
//           <span className="section-tag">Gallery</span>
//           <h2 className="section-title">From Farm to the World</h2>
//           <div className="section-divider"></div>
//         </div>
//         <div className="gallery-grid">
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=900&q=80"
//               alt="Coconut Farm Kerala"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Kerala Coconut Farm</span>
//             </div>
//           </div>
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1535961652354-923cb08225a7?w=600&q=80"
//               alt="Fresh Coconuts"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Fresh Harvest</span>
//             </div>
//           </div>
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
//               alt="Packaging"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Export Packaging</span>
//             </div>
//           </div>
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=900&q=80"
//               alt="Shipping"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Global Shipments</span>
//             </div>
//           </div>
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&q=80"
//               alt="Coconut Oil"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Coconut Oil Bottling</span>
//             </div>
//           </div>
//           <div className="gallery-item reveal">
//             <Image
//               src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80"
//               alt="Quality Check"
//               className="gallery-img"
//             />
//             <div className="gallery-overlay">
//               <span>Quality Inspection</span>
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

const images = [
  {
    src: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=900&q=80",
    alt: "Coconut Farm Kerala",
    title: "Kerala Coconut Farm",
  },
  {
    src: "https://images.unsplash.com/photo-1535961652354-923cb08225a7?w=600&q=80",
    alt: "Fresh Coconuts",
    title: "Fresh Harvest",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Packaging",
    title: "Export Packaging",
  },
  {
    src: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=900&q=80",
    alt: "Shipping",
    title: "Global Shipments",
  },
  {
    src: "https://images.unsplash.com/photo-1559181567-c3190ca9be46?w=600&q=80",
    alt: "Coconut Oil",
    title: "Coconut Oil Bottling",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    alt: "Quality Check",
    title: "Quality Inspection",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">From Farm to the World</h2>
          <div className="section-divider"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[260px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm tracking-wide font-medium">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
