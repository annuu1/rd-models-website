"use client";

import Link from "next/link";
import FloatingContactButtons from "../../FloatingContactButtons";
import Image from "next/image";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedHeader } from "@/components/animated-header";
import React, { useEffect, useState } from "react";
import Head from "next/head";

// Define the images array from local folders
const images = [
  {
    id: 1,
    title: "KAAR",
    description: "A modern residential project with innovative architecture.",
    images: [
      "/gallery/pictures/1-KAAR/1.jpg",
      "/gallery/pictures/1-KAAR/2.jpg",
      "/gallery/pictures/1-KAAR/3.jpg",
      "/gallery/pictures/1-KAAR/4.jpg",
      "/gallery/pictures/1-KAAR/5.jpg",
      "/gallery/pictures/1-KAAR/6.jpg",
    ],
  },
  {
    id: 2,
    title: "Empyreal club",
    description: "A luxury club project combining elegance and comfort.",
    images: [
      "/gallery/pictures/2-Empyreal club/1.jpg",
      "/gallery/pictures/2-Empyreal club/3.jpg",
      "/gallery/pictures/2-Empyreal club/4.jpg",
      "/gallery/pictures/2-Empyreal club/5.jpg",
      "/gallery/pictures/2-Empyreal club/empy (9).JPG",
    ],
  },
  {
    id: 3,
    title: "Lehariya By KGK Realty",
    description: "A vibrant commercial project by KGK Realty, inspired by traditional patterns.",
    images: [
      "/gallery/pictures/3-Lehariya/1 (15).JPG",
      "/gallery/pictures/3-Lehariya/1 (50).JPG",
      "/gallery/pictures/3-Lehariya/1 (58).JPG",
      "/gallery/pictures/3-Lehariya/1 (73).JPG",
      "/gallery/pictures/3-Lehariya/1 (91).JPG",
      "/gallery/pictures/3-Lehariya/2 (32).JPG",
      "/gallery/pictures/3-Lehariya/2 (52).JPG",
    ],
  },
  {
    id: 4,
    title: "Mahakumbh 2025",
    description: "A grand event pavilion designed for Mahakumbh 2025 celebrations.",
    images: [
      "/gallery/pictures/4-Mahakumbh 2025/1 (11).jpg",
      "/gallery/pictures/4-Mahakumbh 2025/1 (28).jpg",
      "/gallery/pictures/4-Mahakumbh 2025/1 (36).jpg",
      "/gallery/pictures/4-Mahakumbh 2025/1 (53).jpg",
      "/gallery/pictures/4-Mahakumbh 2025/1 (63).jpg",
    ],
  },
  {
    id: 5,
    title: "NK Anantya",
    description: "A premium residential complex with state-of-the-art amenities.",
    images: [
      "/gallery/pictures/5-NK-Anantya/(20).JPG",
      "/gallery/pictures/5-NK-Anantya/(30).JPG",
      "/gallery/pictures/5-NK-Anantya/(44).JPG",
      "/gallery/pictures/5-NK-Anantya/(45).JPG",
      "/gallery/pictures/5-NK-Anantya/(47).JPG",
      "/gallery/pictures/5-NK-Anantya/(50).JPG",
    ],
  },
  {
    id: 6,
    title: "MOTF Dubai",
    description: "Museum of the Future, Dubai – a showcase of innovative design and technology.",
    images: [
      "/gallery/pictures/6-MOTF-Dubai/1.png",
      "/gallery/pictures/6-MOTF-Dubai/2.png",
      "/gallery/pictures/6-MOTF-Dubai/3.jpg",
      "/gallery/pictures/6-MOTF-Dubai/4.jpg",
      "/gallery/pictures/6-MOTF-Dubai/5.jpg",
    ],
  }
];

export default function ImageGalleryPage() {
  const [currentIndexes, setCurrentIndexes] = useState(() => images.slice(0, 6).map(() => 0));
  const [isSliding, setIsSliding] = useState(() => images.slice(0, 6).map(() => false));
  const [slideDirections, setSlideDirections] = useState(() => images.slice(0, 6).map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const triggerSlide = (i: number, direction: number, nextIndex: number) => {
    if (isSliding[i]) return;
    setIsSliding((prev) => prev.map((s, j) => (j === i ? true : s))); // Start sliding
    setSlideDirections((prev) => prev.map((d, j) => (j === i ? direction : d)));
    setCurrentIndexes((prev) => prev.map((idx, j) => (j === i ? nextIndex : idx)));

    setTimeout(() => {
      setIsSliding((prev) => prev.map((s, j) => (j === i ? false : s))); // Stop sliding
      setSlideDirections((prev) => prev.map((d, j) => (j === i ? 0 : d)));
    }, 500); // Match slide-in animation duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const numToUpdate = Math.max(1, Math.floor(Math.random() * Math.min(3, 6)));
      const indexes = Array.from({ length: 6 }, (_, i) => i);
      for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
      }
      const toUpdate = indexes.slice(0, numToUpdate);
      toUpdate.forEach((i) => {
        const imgArr = images[i].images;
        let newIdx;
        do {
          newIdx = Math.floor(Math.random() * imgArr.length);
        } while (imgArr.length > 1 && newIdx === currentIndexes[i]);
        const direction = Math.random() > 0.5 ? 1 : -1; // Randomly choose left or right
        triggerSlide(i, direction, newIdx);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndexes]);

  const handlePrev = (i: number) => {
    const nextIndex = (currentIndexes[i] - 1 + images[i].images.length) % images[i].images.length;
    triggerSlide(i, -1, nextIndex);
  };

  const handleNext = (i: number) => {
    const nextIndex = (currentIndexes[i] + 1) % images[i].images.length;
    triggerSlide(i, 1, nextIndex);
  };

  return (
    <div className="md:px-4 min-h-screen bg-background">
      <Head>
        {images.slice(0, 6).map((image) =>
          image.images.map((src, idx) => (
            <link key={`${image.id}-${idx}`} rel="preload" href={src} as="image" />
          ))
        )}
      </Head>
      <AnimatedHeader />
      <main className="py-12">
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Image Gallery"
            subtitle="Browse our extensive collection of high-quality 3D architectural renderings, building models, and interior visualizations showcasing our expertise."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {images.slice(0, 6).map((image, i) => (
            <div
              key={image.id}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[28rem]"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative w-full h-full overflow-hidden bg-gray-200"
                style={{ backgroundImage: `url(/placeholder.svg)` }}
              >
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
                    isSliding[i]
                      ? slideDirections[i] === 1
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Image
                    src={image.images[currentIndexes[i]] || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    priority={i < 6}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                </div>
              </div>
              {hoveredIndex === i && (
                <div className="absolute inset-0 flex items-center justify-between px-2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev(i);
                    }}
                    className="bg-black/50 text-white font-extrabold rounded-full p-2 hover:bg-black/70 transition"
                    aria-label="Previous image"
                  >
                    {"❮"}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext(i);
                    }}
                    className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
                    aria-label="Next image"
                  >
                    {"❯"}
                  </button>
                </div>
              )}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-48 z-20 opacity-0 pointer-events-none transform -translate-y-full group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-end pb-4">
                    <h3 className="text-lg font-bold font-forum drop-shadow text-white text-center mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm font-barlow drop-shadow text-white text-center max-w-xs">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Images
          </Button>
        </div>
      </main>
      <footer className="border-t bg-muted mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-forum">RD Models</span>
            </div>
            <p className="text-sm text-muted-foreground font-barlow">
              &copy; {new Date().getFullYear()} RD Models, Jaipur, Rajasthan, India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <FloatingContactButtons />
    </div>
  );
}