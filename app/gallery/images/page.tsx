"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedHeader } from "@/components/animated-header";
import { FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaGlobeAsia, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingContactButtons from "../../FloatingContactButtons";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

// Type for gallery project
interface GalleryProject {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
}

export default function ImageGalleryPage() {
  const [images, setImages] = useState<GalleryProject[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(9); // State for pagination (3 rows × 3 columns)
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for full-screen image

  // Mouse position tracking for click vs drag detection
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null);
  const DRAG_THRESHOLD = 5; // Pixels of movement to consider it a drag

  // Fetch images from API
  useEffect(() => {
    fetch("/api/gallery-images")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  // Extract unique categories
  const categories = [
    "All",
    "High Rise Residential",
    "Low Rise Residential",
    "Villa Township",
    "Landscape + Resort",
    "Interior Units",
    "House Models",
    "Commercial Models",
    "Institutional Models",
    "Industrial / Factory Models",
    "Healthcare Hospital Models",
    "Water supply Models",
    "Residential Township",
    "Industrial Township",
    "Monochromatic Models",
    "Art Models",
    "Miscellaneous"
  ]

  // Split categories into two rows
  const firstRowCategories = categories.slice(0, 9);
  const secondRowCategories = categories.slice(9, 18);

  // Filter projects based on selected category
  const filteredImages =
    selectedCategory === "All" ? images : images.filter((project) => project.category === selectedCategory);

  // Slice filtered images for pagination
  const displayedImages = filteredImages.slice(0, visibleProjects);

  // Reset visibleProjects when category changes
  useEffect(() => {
    setVisibleProjects(9);
  }, [selectedCategory]);

  // Intersection Observer for automatic loading
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the ref element is visible
    triggerOnce: false, // Allow multiple triggers
  });

  useEffect(() => {
    if (inView && visibleProjects < filteredImages.length) {
      setVisibleProjects((prev) => prev + 9); // Load next 3 rows (9 projects)
    }
  }, [inView, filteredImages.length, visibleProjects]);

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

  // Handle mouse down to record starting position
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
  };

  // Handle mouse up to check if it was a click or drag
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, image: string) => {
    if (mouseDownPos.current) {
      const dx = Math.abs(e.clientX - mouseDownPos.current.x);
      const dy = Math.abs(e.clientY - mouseDownPos.current.y);
      // If movement is less than threshold, treat as a click
      if (dx <= DRAG_THRESHOLD && dy <= DRAG_THRESHOLD) {
        handleImageClick(image);
      }
    }
    mouseDownPos.current = null; // Reset position
  };

  // Handle image click to open full-screen
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  // Close full-screen modal
  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <main className="py-12 md:px-4">
        <div className="mb-12">
          <Button
            variant="default"
            size="sm"
            asChild
            className="mb-6 rounded-full bg-primary px-6 py-2 text-primary-foreground hover:bg-primary/10 hover:text-primary transition-all hover:border-primary hover:border-2 hover:shadow-md hover:shadow-primary/10"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          <SectionHeading
            title="Image Gallery"
            subtitle="Explore our collection of architectural images showcasing our expertise in building modeling and design."
          />
        </div>
        <div className="mb-8 flex flex-col gap-4 justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {firstRowCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 font-barlow text-sm ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300 ease-in-out"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          {secondRowCategories.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {secondRowCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 font-barlow text-sm ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300 ease-in-out"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {displayedImages.map((project) => (
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
                  <div
                    key={`${project.id}-${index}`}
                    className="relative w-full h-[28rem] cursor-pointer"
                    onMouseDown={handleMouseDown}
                    onMouseUp={(e) => handleMouseUp(e, image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} image ${index + 1}`}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out"
                      style={{ height: "100%", width: "100%" }}
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
        {/* Invisible trigger for automatic loading */}
        {visibleProjects < filteredImages.length && (
          <div ref={loadMoreRef} className="h-10 w-full mt-16"></div>
        )}
      </main>
      {/* Full-screen image modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeFullScreen}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Full-screen image"
              className="object-contain max-w-[90%] max-h-[90%]"
              width={1920}
              height={1080}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeFullScreen}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      )}
      <FloatingContactButtons />
    </div>
  );
}