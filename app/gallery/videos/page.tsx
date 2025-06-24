"use client";

import Link from "next/link";
import { ArrowLeft, Play, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedHeader } from "@/components/animated-header";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaGlobeAsia,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingContactButtons from "../../FloatingContactButtons";
import React, { useState } from "react";

// Video data with Cloudinary videos
const videos = [
  {
    id: 9,
    title: "Modern Residential Visualization",
    category: "Residential",
    description:
      "Detailed 3D visualization showcasing a modern residential building with contemporary design elements.",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?height=800&width=1200",
    videoUrl:
      "https://res.cloudinary.com/dp8l2hrt1/video/upload/v1750762802/Vid_20250623_040321_603_1_1_1_1_1_hcoqie.mp4",
    duration: "4:00",
  },
  {
    id: 10,
    title: "Commercial Space Animation",
    category: "Commercial",
    description:
      "Animated tour of a commercial space highlighting innovative architectural design and functionality.",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?height=800&width=1200",
    videoUrl:
      "https://res.cloudinary.com/dp8l2hrt1/video/upload/v1750762792/Vid_1_1_1_1_rqt8br.mp4",
    duration: "3:30",
  },
  {
    id: 11,
    title: "Urban Development Walkthrough",
    category: "Mixed-Use",
    description:
      "Comprehensive walkthrough of an urban development project featuring integrated residential and commercial spaces.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?height=800&width=1200",
    videoUrl:
      "https://res.cloudinary.com/dp8l2hrt1/video/upload/v1750762791/Vd1_fina__akwygd.mp4",
    duration: "5:00",
  },
];

export default function VideoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract unique categories
  const categories = ["All", ...new Set(videos.map((video) => video.category))];

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  // Footer form state and handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle video play
  const handlePlayVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  // Close video modal
  const handleCloseVideo = () => {
    setSelectedVideo(null);
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
            title="Video Gallery"
            subtitle="Explore our collection of 3D architectural visualizations, walkthroughs, and project presentations showcasing our expertise in building modeling."
          />
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
                <button
                  onClick={() => handlePlayVideo(video.videoUrl)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-110">
                    <Play
                      className="h-8 w-8 text-white ml-1"
                      fill="currentColor"
                    />
                  </div>
                </button>
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
                    <p className="text-xs text-white font-barlow mt-1 text-center px-2">
                      {video.description}
                    </p>
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
            <video
              className="w-full h-auto"
              controls
              autoPlay
              src={selectedVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <FloatingContactButtons />
    </div>
  );
}