"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { ParticleBackground } from "@/components/particle-background"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function HeroSection() {
  // List of background images (add more if needed)
  const backgrounds = [
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/1.JPG",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/2.jpg",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/3.jpg",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/4.jpg",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/5.jpg",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/6.JPG",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/7.jpg",
    "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/hero-bg/8.JPG",
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic background switching
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000); // 6 seconds
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, backgrounds.length]);

  // Manual navigation
  const goTo = (idx: number) => {
    setCurrent((idx + backgrounds.length) % backgrounds.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel - Pure Fade Transition */}
      <div className="absolute inset-0 z-0">
        {/* Only render the current background image using Next.js Image for optimization */}
        {backgrounds.map((src, idx) => (
          <motion.div
            key={src + idx}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: idx === current ? 1 : 0, pointerEvents: "none", transition: "opacity 1s" }}
            animate={{ opacity: idx === current ? 1 : 0, scale: idx === current ? 1.07 : 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ opacity: { duration: 1 }, scale: { duration: 6, ease: 'easeInOut' } }}
          >
            <Image
              src={ src.startsWith("https://") ? src : src.startsWith("/") ? src : "/" + src.replace(/^images\//, "images/")}
              alt="Hero background"
              fill
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              quality={75}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/70 via-black/40 to-black/20" />
        {/* Arrow Buttons */}
        <button
          aria-label="Previous background"
          className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 shadow-lg focus:outline-none"
          onClick={() => goTo(current - 1)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          aria-label="Next background"
          className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 shadow-lg focus:outline-none"
          onClick={() => goTo(current + 1)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
     <div className="relative z-20 text-center text-white bg-black bg-opacity-70 p-10 rounded-xl max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=""
        >
          <motion.h1
            className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6 font-forum"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* <TypewriterEffect words={["Premier", "3D Architectural", "Modeling Services"]} className="text-white font-grenda" /> */}
            <TypewriterEffect
              words={["Leading Model Maker In India", "India’s Top 3D Model Makers", "Best Scale Model Company in India"]}
              className="text-white font-forum border-b-4 border-white pb-2 max-w-xs sm:max-w-md mx-auto text-2xl sm:text-4xl lg:text-5xl leading-snug text-center"
            />
          </motion.h1> 

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 font-barlow text-green-400">
              Based in Jaipur • Serving All of India
            </h2> */}
            <p className="text-lg md:text-xl lg:text-xl font-forum text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We are a leading 3D model making company in India, specializing in highly detailed architectural scale models, conceptual design models, interior models, landscape models etc.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* <AnimatedButton
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-barlow text-lg px-8 py-4 rounded-full shadow-2xl border-0 relative overflow-hidden group"
              >
                <Link href="/gallery/images" className="relative z-10 flex items-center gap-2">
                  <span>View Our Work</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </motion.svg>
                </Link>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatedButton> */}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedButton
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-barlow text-lg px-5 py-3 rounded-full shadow-2xl backdrop-blur-sm bg-white/10 relative overflow-hidden group"
              >
                <Link href="/contact" className="relative z-10 flex items-center gap-2">
                  <span>Contact Us</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform duration-300"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </motion.svg>
                </Link>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/70 text-center"
          >
            <p className="text-sm font-barlow mb-2">Scroll to explore</p>
            <motion.div
              className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto relative"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
