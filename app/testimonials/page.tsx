"use client";

import { motion } from "framer-motion";
import FloatingContactButtons from "../FloatingContactButtons";
import { AnimatedHeader } from "@/components/animated-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Optional: Use axios or fetch

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.28 },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
  },
};

export default function TestimonialsPage() {
  // Define the type for a testimonial
  type Testimonial = {
    id: string | number;
    author: string;
    avatar: string;
    quote: string;
    position?: string;
  };

  // State for testimonials, loading, and error
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch testimonials on component mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        // Replace with your API endpoint
        const response = await axios.get("/api/testimonials");
        // const response = await fetch("http://localhost:3000/api/testimonials"); // Alternative with fetch
        // const data = await response.json();
        setTestimonials(response.data); // Use response.data for axios, or data for fetch
        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please try again later.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatedHeader />
      <main>
        <section className="py-4 md:py-4">
          <div className="container mx-auto px-4">
            <Button
              variant="default"
              size="sm"
              className="mb-2 rounded-full px-6 py-2 text-primary bg-transparent hover:bg-gray-100"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <SectionHeading
              title="Testimonials"
              subtitle="Hear what our clients have to say about our work, service, and results."
            />
            {loading ? (
              <div className="text-center py-8">
                <p>Loading testimonials...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <p>{error}</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="text-center py-8">
                <p>No testimonials available.</p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 mt-12 [&>*]:mb-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.id}
                    className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col group border border-gray-100 dark:border-gray-800 overflow-hidden break-inside-avoid"
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="flex items-center gap-4 mb-4 z-10 relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200 dark:border-gray-700 bg-white flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.author}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-white text-lg leading-tight font-barlow">
                          {t.author}
                        </span>
                        {t.position && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                            {t.position}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-base font-barlow relative z-10 leading-relaxed group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-200">
                      {t.quote}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <FloatingContactButtons />
    </div>
  );
}