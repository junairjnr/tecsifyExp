"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 40);
    });
  }, []);

  return (
    // <nav className={`fixed w-full z-50 p-4 transition ${scrolled ? "bg-white shadow" : "bg-transparent text-white"}`}>
    //   <div className="flex justify-between items-center max-w-6xl mx-auto">
    //     <h1 className="font-serif text-xl font-bold">🥥 Tecsify</h1>
    //     <div className="hidden md:flex gap-6">
    //       <a href="#products">Products</a>
    //       <a href="#contact">Contact</a>
    //     </div>
    //   </div>
    // </nav>
    <nav id="navbar">
      <a href="#home" className="nav-logo">
        <div className="nav-logo-icon">🥥</div>
        <div className="nav-logo-text">
          Tecsify Exportings<span>Kerala, India</span>
        </div>
      </a>
      <ul className="nav-links" id="navLinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#quality">Quality</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#testimonials">Clients</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Get Quote
          </a>
        </li>
      </ul>
      <button className="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
