"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedHeader } from "@/components/animated-header";
import { FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaGlobeAsia, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingContactButtons from "../../FloatingContactButtons";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the images array
const images = [
  {
    id: 1,
    title: "KAAR",
    category: "High Rise Residential",
    description: "A modern residential project with innovative architecture.",
    images: [
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/1.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/2.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/3.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/4.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/5.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/1-KAAR/6.jpg",
    ],
  },
  {
    id: 2,
    title: "Empyreal club",
    category: "Low Rise Residential",
    description: "A luxury club project combining elegance and comfort.",
    images: [
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/2-Empereal%20Club/1-Y1qxKYNUfDUSKq6OUXI5koDz8Jm3Zg.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/2-Empereal%20Club/2-cnIA533kHqIXZkYO8o4tprBTdRUJ2z.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/2-Empereal%20Club/3-lKjHOZOePLsmmnXV6kIpi1NUoHmpEd.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/2-Empereal%20Club/4-uGZ1rL1FHlSC243szRA6rpOJ5Nycd2.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/2-Empereal%20Club/5-TIzgf9Dz6P8FvMllNxQM715BVOAuTS.jpg",
    ],
  },
  {
    id: 3,
    title: "Lehariya By KGK Realty",
    category: "Landscape+ Resort",
    description: "A vibrant commercial project by KGK Realty, inspired by traditional patterns.",
    images: [
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/1%20%2815%29-uLSnPWKlnm9jKxn1vAgzZKnsi5PPu7.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/1%20%2850%29-SrxEhJxoZM9dpsZqYYpyGaznOEVRvS.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/1%20%2858%29-YPkUhXkAWRAqY6y2a4qcu61bpfkOFK.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/1%20%2873%29-mgrXLgEaYPcGmBmta6Qv799gSH9zgn.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/1%20%2891%29-6m8sidH4nuhgR3YvRpWu8aSH2Ad8vD.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/2%20%2832%29-7iVlo35QbmKpi726KD2UHUnNTe4TF5.JPG",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/3-Lehariya/2%20%2852%29-EHwoqTx6787A0clyjEuOit728lQmDu.JPG",
    ],
  },
  {
    id: 4,
    title: "Mahakumbh 2025",
    category: "Interior Units",
    description: "A grand event pavilion designed for Mahakumbh 2025 celebrations.",
    images: [
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/4-Mahakumbh%202025/1%20%2811%29-Jseg2wZlEQeKDgWUihr6QsLfgNgJ4U.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/4-Mahakumbh%202025/1%20%2828%29-C7OZcDWLCadtmfWztrlfclHCAbBJka.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/4-Mahakumbh%202025/1%20%2836%29-uhtAQbUWMAMrX99uqcKfnqB7H6Bjtp.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/4-Mahakumbh%202025/1%20%2853%29-KY93n88pzrJhDF485SHxEDL17wA63W.jpg",
      "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/4-Mahakumbh%202025/1%20%2863%29-6a1b8vY0sO0wS5LLhIW0aTJVSsuLuo.jpg",
    ],
  },
  {
    id: 5,
    title: "NK Anantya",
    category: "House Models",
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
    category: "Commercial Models",
    description: "Museum of the Future, Dubai – a showcase of innovative design and technology.",
    images: [
      "/gallery/pictures/6-MOTF-Dubai/1.png",
      "/gallery/pictures/6-MOTF-Dubai/2.png",
      "/gallery/pictures/6-MOTF-Dubai/3.JPG",
      "/gallery/pictures/6-MOTF-Dubai/4.JPG",
      "/gallery/pictures/6-MOTF-Dubai/5.JPG",
    ],
  },
];

export default function ImageGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(images.map((project) => project.category))];

  // Filter projects based on selected category
  const filteredImages =
    selectedCategory === "All" ? images : images.filter((project) => project.category === selectedCategory);

  // Footer form state and handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <main className="py-12 md:px-4">
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Image Gallery"
            subtitle="Explore our collection of architectural images showcasing our expertise in building modeling and design."
          />
        </div>
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-4 py-2 font-barlow text-sm ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredImages.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[28rem]"
            >
              <Slider
                autoplay={true}
                autoplaySpeed={5000}
                dots={true}
                infinite={true}
                arrows={true}
                className="w-full h-full"
              >
                {project.images.map((image, index) => (
                  <div key={`${project.id}-${index}`} className="relative w-full h-[28rem]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} image ${index + 1}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out"
                      style={{height: '100%', width: '100%'}}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-48 z-20 opacity-0 pointer-events-none transform -translate-y-full group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-end pb-4">
                    <h3 className="text-lg font-bold font-forum drop-shadow text-white text-center">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white font-barlow mt-1 text-center px-2">{project.description}</p>
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
      <FloatingContactButtons />
    </div>
  );
}