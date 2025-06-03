"use client";

import Link from "next/link";
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
    title: "Lehariya",
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
    title: "NK-Anantya",
    images: [
      "/gallery/pictures/5-NK-Anantya/(20).JPG",
      "/gallery/pictures/5-NK-Anantya/(30).JPG",
      "/gallery/pictures/5-NK-Anantya/(44).JPG",
      "/gallery/pictures/5-NK-Anantya/(45).JPG",
      "/gallery/pictures/5-NK-Anantya/(47).JPG",
      "/gallery/pictures/5-NK-Anantya/(50).JPG",
    ],
  },
  // Add more if new folders/images are added
];

export default function ImageGalleryPage() {
  const [currentIndexes, setCurrentIndexes] = useState(() => images.slice(0, 6).map(() => 0));
  const [nextIndexes, setNextIndexes] = useState(() => images.slice(0, 6).map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [slideDirections, setSlideDirections] = useState(() => images.slice(0, 6).map(() => 0));
  const [isSliding, setIsSliding] = useState(() => images.slice(0, 6).map(() => false));

  const triggerSlide = (i: number, direction: number, nextIndex: number) => {
    if (isSliding[i]) return;
    setNextIndexes((prev) => prev.map((idx, j) => (j === i ? nextIndex : idx)));
    setSlideDirections((prev) => prev.map((d, j) => (j === i ? direction : d)));
    setIsSliding((prev) => prev.map((s, j) => (j === i ? true : s)));
    setTimeout(() => {
      setCurrentIndexes((prev) => prev.map((idx, j) => (j === i ? nextIndex : idx)));
      setIsSliding((prev) => prev.map((s, j) => (j === i ? false : s)));
      setSlideDirections((prev) => prev.map((d, j) => (j === i ? 0 : d)));
    }, 800);
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
        triggerSlide(i, 1, newIdx);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndexes]);

  const handlePrev = (i: number) => {
    if (isSliding[i]) return;
    const nextIndex = (currentIndexes[i] - 1 + images[i].images.length) % images[i].images.length;
    triggerSlide(i, -1, nextIndex);
  };
  const handleNext = (i: number) => {
    if (isSliding[i]) return;
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
              className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-500 h-96"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative w-full h-full overflow-hidden rounded-lg bg-gray-200"
                style={{ backgroundImage: `url(/placeholder.svg)` }}
              >
                <div
                  className={`absolute inset-0 w-full h-full transition-transform duration-800 ease-in-out z-10 ${
                    slideDirections[i] === 0
                      ? "translate-x-0 opacity-100"
                      : slideDirections[i] === 1
                      ? isSliding[i]
                        ? "translate-x-full opacity-0"
                        : "translate-x-0 opacity-100"
                      : isSliding[i]
                      ? "-translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                  style={{ willChange: "transform, opacity" }}
                >
                  <Image
                    src={image.images[currentIndexes[i]] || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    priority={i < 6}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                  />
                </div>
                {isSliding[i] && (
                  <div
                    className={`absolute inset-0 w-full h-full transition-transform duration-800 ease-in-out z-10 ${
                      slideDirections[i] === 1
                        ? isSliding[i]
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-full opacity-0"
                        : isSliding[i]
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                    }`}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <Image
                      src={image.images[nextIndexes[i]] || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="/placeholder.svg"
                    />
                  </div>
                )}
                {hoveredIndex === i && (
                  <div className="absolute inset-0 flex items-center justify-between px-2 z-20">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev(i);
                      }}
                      className="bg-black/0 text-white font-extrabold rounded-full p-0 hover:scale-110 transition"
                      aria-label="Previous image"
                    >
                      {"❮"}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext(i);
                      }}
                      className="bg-black/0 text-white rounded-full p-0 hover:scale-110 transition"
                      aria-label="Next image"
                    >
                      {"❯"}
                    </button>
                  </div>
                )}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-lg" />
              </div>
              {/* Overlay and info on hover */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Polythen-like overlay sliding from top */}
                <div className="absolute inset-0 bg-white/40 rounded-none z-20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out" />
                {/* Info (fades in on overlay) */}
                <div className="absolute bottom-0 left-0 w-full px-4 pb-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-black text-center pointer-events-none">
                  <h3 className="text-lg font-bold font-forum drop-shadow">{image.title}</h3>
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
              © {new Date().getFullYear()} RD Models, Jaipur, Rajasthan, India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
