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

// Define the images array
const images = [
  {
    id: 1,
    title: "Masar Makkah",
    description:
      "2.2-mile King Abdul Aziz Road (KAAR) urban development corridor in Makkah (Mecca), Saudi Arabia, the gateway development designed by Omrania / HOK",
    images: [
      "https://rdmodels.com/wp-content/uploads/2025/01/Kaar-Dubai-6-768x512-1.jpg",
      "https://rdmodels.com/wp-content/uploads/2025/01/Kaar-Dubai-1-768x512-1.jpg",
      "https://rdmodels.com/wp-content/uploads/2025/01/Kaar-Dubai-5-768x512-1.jpg",
    ],
  },
  {
    id: 2,
    title: "Corporate Office Building",
    description: "Multi-story corporate office with glass facade and modern architecture",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?height=800&width=1200",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?height=800&width=1200",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?height=800&width=1200",
    ],
  },
  {
    id: 3,
    title: "Luxury Hotel Interior",
    description: "Elegant hotel lobby with premium finishes and sophisticated lighting",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?height=800&width=1200",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?height=800&width=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?height=800&width=1200",
    ],
  },
  {
    id: 4,
    title: "Shopping Mall Exterior",
    description: "Modern shopping complex with contemporary design and landscaping",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?height=800&width=1200",
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?height=800&width=1200",
      "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?height=800&width=1200",
    ],
  },
  {
    id: 5,
    title: "Educational Campus",
    description: "University campus with academic buildings and green spaces",
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?height=800&width=1200",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?height=800&width=1200",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?height=800&width=1200",
    ],
  },
  {
    id: 6,
    title: "Healthcare Facility",
    description: "Modern hospital building with patient-friendly design",
    images: [
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?height=800&width=1200",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?height=800&width=1200",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?height=800&width=1200",
    ],
  },
  {
    id: 7,
    title: "Industrial Complex",
    description: "Manufacturing facility with efficient layout and modern infrastructure",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?height=800&width=1200",
      "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?height=800&width=1200",
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?height=800&width=1200",
    ],
  },
  {
    id: 8,
    title: "Residential Apartment",
    description: "High-rise residential building with balconies and modern amenities",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?height=800&width=1200",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?height=800&width=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?height=800&width=1200",
    ],
  },
  {
    id: 9,
    title: "Restaurant Interior",
    description: "Contemporary restaurant design with open kitchen and dining areas",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?height=800&width=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?height=800&width=1200",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?height=800&width=1200",
    ],
  },
  {
    id: 10,
    title: "Luxury Resort",
    description: "Beachfront resort with infinity pools and tropical landscaping",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?height=800&width=1200",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?height=800&width=1200",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?height=800&width=1200",
    ],
  },
  {
    id: 11,
    title: "Urban Mixed-Use Development",
    description: "Mixed-use complex combining residential, commercial, and retail spaces",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?height=800&width=1200",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?height=800&width=1200",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?height=800&width=1200",
    ],
  },
  {
    id: 12,
    title: "Cultural Center",
    description: "Contemporary cultural center with exhibition halls and performance spaces",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?height=800&width=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?height=800&width=1200",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?height=800&width=1200",
    ],
  },
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
    <div className="min-h-screen bg-background">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {images.slice(0, 6).map((image, i) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-200"
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
                {isSliding[i] && slideDirections[i] !== 0 && (
                  <div
                    className={`absolute inset-0 w-full h-full transition-transform duration-800 ease-in-out z-20 ${
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
                      ←
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext(i);
                      }}
                      className="bg-black/0 text-white rounded-full p-0 hover:scale-110 transition"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>
                )}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500 rounded-lg" />
              </div>
              <div className="p-3 bg-white">
                <h3 className="text-base font-bold font-forum">{image.title}</h3>
                <p className="text-xs text-muted-foreground font-barlow mt-0.5">{image.description}</p>
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