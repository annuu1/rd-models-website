"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 21;
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mouse position tracking for click vs drag detection
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null);
  const DRAG_THRESHOLD = 5;

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
    "Villa Unit Models",
    "Industrial / Factory Models",
    "Healthcare Hospital Models",
    "Water supply Models",
    "Residential Township",
    "Industrial Township",
    "Monochromatic Models",
    "Art Models",
    "Sectional Models",
    "Miscellaneous",
  ];

  // Responsive: show only a few categories on mobile, all on desktop
  const [showAllCategories, setShowAllCategories] = useState(false);
  const mobileCategoryLimit = 5;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // For mobile: show only a few, rest on toggle
  const visibleCategories = isMobile && !showAllCategories
    ? categories.slice(0, mobileCategoryLimit)
    : categories;
  const hiddenCategories = isMobile && !showAllCategories
    ? categories.slice(mobileCategoryLimit)
    : [];

  // For desktop: keep previous row split
  const firstRowCategories = !isMobile ? categories.slice(0, 9) : [];
  const secondRowCategories = !isMobile ? categories.slice(9, 18) : [];

  // Filter projects based on selected category
  const filteredImages =
    selectedCategory === "All" ? images : images.filter((project) => project.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedImages = filteredImages.slice(startIndex, startIndex + projectsPerPage);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Handle Escape key to close full-screen modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setCurrentImageIndex(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, project: GalleryProject, index: number) => {
    if (mouseDownPos.current) {
      const dx = Math.abs(e.clientX - mouseDownPos.current.x);
      const dy = Math.abs(e.clientY - mouseDownPos.current.y);
      if (dx <= DRAG_THRESHOLD && dy <= DRAG_THRESHOLD) {
        handleImageClick(project, index);
      }
    }
    mouseDownPos.current = null;
  };

  // Handle image click to open full-screen
  const handleImageClick = (project: GalleryProject, index: number) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  // Close full-screen modal
  const closeFullScreen = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Navigate to previous image
  const goToPreviousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Navigate to next image
  const goToNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <main className="py-12 md:px-4">
        <div className="mb-12">
          <Button
            variant="default"
            size="sm"
            className="mb-6 rounded-full px-6 py-2 text-primary bg-transparent hover:bg-gray-100"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
          <SectionHeading
            title="Image Gallery"
            subtitle="Explore our collection of architectural images showcasing our expertise in building modeling and design."
          />
        </div>
        {/* Categories: Responsive - mobile vs desktop */}
        <div className="mb-8 flex flex-col gap-4 justify-center">
          {/* Mobile: show only a few categories, rest behind a toggle */}
          <div className="flex flex-wrap gap-4 justify-center md:hidden">
            {visibleCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 font-barlow text-sm ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/100 hover:text-primary-foreground transition-all duration-300 ease-in-out"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
            {hiddenCategories.length > 0 && (
              <Button
                variant="outline"
                className="px-4 py-2 font-barlow text-sm"
                onClick={() => setShowAllCategories((prev) => !prev)}
              >
                {showAllCategories ? "Show less" : `+${hiddenCategories.length} more`}
              </Button>
            )}
          </div>
          {/* Desktop: show all categories in two rows as before */}
          <div className="hidden md:flex flex-col gap-4 justify-center">
            <div className="flex flex-wrap gap-4 justify-center">
              {firstRowCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-4 py-2 font-barlow text-sm ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/100 hover:text-primary-foreground transition-all duration-300 ease-in-out"
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
                        : "hover:bg-primary/100 hover:text-primary-foreground transition-all duration-300 ease-in-out"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </div>
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
                    onMouseUp={(e) => handleMouseUp(e, project, index)}
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
        {/* Pagination buttons */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </main>
      {/* Full-screen image modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeFullScreen}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
              className="object-contain max-w-[90%] max-h-[90%]"
              width={1920}
              height={1080}
            />
            {/* Navigation buttons */}
            {selectedProject.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreviousImage();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeFullScreen}
            >
              <X className="h-6 w-6" />
            </Button>
            {/* Image counter */}
            {selectedProject.images.length > 1 && (
              <div className="absolute bottom-4 text-white text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
      <FloatingContactButtons />
    </div>
  );
}