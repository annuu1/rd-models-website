"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedHeader } from "@/components/animated-header";
import { FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaGlobeAsia, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingContactButtons from "../../FloatingContactButtons";
import React, { useState } from "react";

// Sample video data with categories
const videos = [
  {
    id: 1,
    title: "Luxury Residential Complex Walkthrough",
    category: "Residential",
    description: "Complete 3D walkthrough of a luxury residential project featuring modern amenities and landscaping.",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Commercial Office Building 360° Tour",
    category: "Commercial",
    description: "Interactive 360-degree tour of a modern commercial office building with detailed interior spaces.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:20",
  },
  {
    id: 3,
    title: "Hospital Complex Architectural Visualization",
    category: "Institutional",
    description:
      "Comprehensive visualization of a multi-specialty hospital complex with detailed floor plans and facilities.",
    thumbnail: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:15",
  },
  {
    id: 4,
    title: "Shopping Mall Interior Design Showcase",
    category: "Commercial",
    description:
      "Detailed showcase of shopping mall interior design with retail spaces, food courts, and entertainment areas.",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:30",
  },
  {
    id: 5,
    title: "Educational Campus Master Plan",
    category: "Institutional",
    description:
      "Complete master plan visualization of an educational campus with academic buildings, hostels, and recreational facilities.",
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "7:45",
  },
  {
    id: 6,
    title: "Industrial Factory Layout Animation",
    category: "Industrial",
    description: "Animated presentation of industrial factory layout with production lines and workflow optimization.",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:55",
  },
  {
    id: 7,
    title: "Luxury Resort Development",
    category: "Hospitality",
    description: "Stunning visualization of a beachfront resort with infinity pools and tropical landscaping.",
    thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:30",
  },
  {
    id: 8,
    title: "Urban Mixed-Use Development",
    category: "Mixed-Use",
    description:
      "Comprehensive walkthrough of a mixed-use development combining residential, commercial, and retail spaces.",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?height=800&width=1200",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:15",
  },
];

export default function VideoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(videos.map((video) => video.category))];

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All" ? videos : videos.filter((video) => video.category === selectedCategory);

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
            title="Video Gallery"
            subtitle="Explore our collection of 3D architectural visualizations, walkthroughs, and project presentations showcasing our expertise in building modeling."
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
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[24rem]"
            >
              <div
                className="relative h-full w-full overflow-hidden bg-gray-200"
                style={{ backgroundImage: `url(/placeholder.svg)` }}
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="object-fill w-full h-full group-hover:scale-105 transition-transform duration-800 ease-out"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm font-barlow flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-48 z-20 opacity-0 pointer-events-none transform -translate-y-full group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-end pb-4">
                    <h3 className="text-lg font-bold font-forum drop-shadow text-white text-center">
                      {video.title}
                    </h3>
                    <p className="text-xs text-white font-barlow mt-1 text-center px-2">{video.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Load More Videos
          </Button>
        </div>
      </main>
      {/* <footer className="border-t bg-muted mt-16">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-16 w-48">
                  <Image
                    src="/images/logo.png"
                    alt="RD Models Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
              <p className="text-muted-foreground max-w-xs font-barlow mb-4">
                Leading 3D architectural modeling company based in Jaipur, Rajasthan, serving clients across India with
                detailed building models and visualizations.
              </p>
              <div className="text-sm text-muted-foreground font-barlow mb-4">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  Jaipur, Rajasthan, India
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobeAsia className="h-4 w-4" />
                  Serving all of India
                </p>
                <p>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    aria-label="Phone number"
                  >
                    <FaPhone className="h-4 w-4" />
                    +91 123-456-7890
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@rdmodels.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    aria-label="Email address"
                  >
                    <FaEnvelope className="h-4 w-4" />
                    info@rdmodels.com
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4 font-forum">Quick Links</h3>
              <ul className="space-y-2 font-barlow">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 font-forum">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4 font-barlow">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-muted-foreground/50 text-muted-foreground focus:outline-none focus:border-primary py-2 px-1 transition-colors placeholder:text-muted-foreground/70"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent border-b border-muted-foreground/50 text-muted-foreground focus:outline-none focus:border-primary py-2 px-1 transition-colors placeholder:text-muted-foreground/70"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={1}
                    className="w-full bg-transparent border-b border-muted-foreground/50 text-muted-foreground focus:outline-none focus:border-primary py-2 px-1 transition-colors placeholder:text-muted-foreground/70 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer> */}
      <FloatingContactButtons />
    </div>
  );
}