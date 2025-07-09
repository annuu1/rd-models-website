"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedHeader } from "@/components/animated-header";
import axios from "axios"; // Optional: Use axios or fetch

type Publication = {
  id: number;
  title?: string;
  image: string;
  category?: string;
};

export default function PublicationsClient() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch publications on component mount
  const fetchPublications = async () => {
    try {
      setLoading(true);
      // Replace with your API endpoint
      const response = await axios.get("/api/publications");
      // Alternative with fetch:
      // const response = await fetch("http://localhost:3000/api/publications");
      // const data = await response.json();
      setPublications(response.data); // Use response.data for axios, or data for fetch
      setLoading(false);
    } catch (err) {
      console.error("Error fetching publications:", err);
      setError("Failed to load publications. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []); // Empty dependency array to run once on mount

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <main className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
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
            title="Publications Gallery"
            subtitle="Explore our collection of featured articles and press achievements."
          />
        </div>

        {/* Publications Gallery */}
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-2">Loading publications...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            <p>{error}</p>
            <Button onClick={() => fetchPublications()} className="mt-4">
              Retry
            </Button>
          </div>
        ) : publications.length === 0 ? (
          <div className="text-center py-8">
            <p>No publications available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication) => (
              <motion.div
                key={publication.id}
                className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(publication.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(publication.image);
                  }
                }}
                aria-label={`View ${publication.title || "publication"}`}
              >
                <div className="relative w-full h-80 flex items-center justify-center p-4">
                  <Image
                    src={publication.image}
                    alt={publication.title || "Publication image"}
                    fill
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={publication.id === 1}
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 text-white text-center">
                      <h3 className="text-lg font-semibold font-barlow">
                        {publication.title || ""}
                      </h3>
                      {publication.category && (
                        <p className="text-sm text-gray-200 mt-1">
                          {publication.category}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-5xl w-full mx-auto"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 bg-black/50 rounded-full"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </Button>
                <Image
                  src={selectedImage}
                  alt="Full-screen newspaper cutting"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg max-h-[85vh] object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}