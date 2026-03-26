"use client";

import { useEffect } from "react";

import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";
import { Fragment } from "react/jsx-runtime";
import HighLights from "./Components/Highlights";
import About from "./Components/About";
import Quality from "./Components/QualitySection";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  useEffect(() => {
    // Sticky nav
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Hamburger
    const ham = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (ham && navLinks) {
      ham.addEventListener("click", () => {
        ham.classList.toggle("open");
        navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          ham.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    // Contact form
    const form = document.getElementById("inquiryForm");
    const success = document.getElementById("formSuccess");

    const handleSubmit = (e: any) => {
      e.preventDefault();
      if (form && success) {
        form.style.display = "none";
        success.style.display = "block";
      }
    };

    form?.addEventListener("submit", handleSubmit);

    // Cleanup (important in React)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      form?.removeEventListener("submit", handleSubmit);
      observer.disconnect();
    };
  }, []);

  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    <Fragment>
      <Navbar />
      <Hero />
      <HighLights />
      <About />
      <Products />
      <Quality />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20coconut%20export%20products.%20Please%20share%20your%20catalogue%20and%20pricing."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </Fragment>
  );
}
