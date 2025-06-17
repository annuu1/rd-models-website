"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { AnimatedHeader } from "@/components/animated-header"

const publications = [
  {
    id: 1,
    title: "Newspaper Cutting 1",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/publications/publication_2.jpg",
  },
  {
    id: 2,
    title: "Newspaper Cutting 2",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/publications/publication_4.jpg",
  },
  {
    id: 3,
    title: "Newspaper Cutting 3",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/publications/publication_1.jpg",
  },
  {
    id: 4,
    title: "Newspaper Cutting 4",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/publications/publication_3.jpg",
  },
]

export default function PublicationsClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main className="container py-12">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <SectionHeading
            title="Publications"
            subtitle="A collection of our featured articles and achievements in the press."
          />
        </div>

        {/* Publications Gallery */}
        <div className="grid grid-cols-1 gap-8">
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl max-w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(publication.image)}
            >
              <Image
                src={publication.image}
                alt={publication.title}
                width={600}
                height={300}
                className="w-full h-auto object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <p className="text-sm font-barlow">{publication.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-4xl w-full mx-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-white hover:bg-white/20"
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
                  className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* <footer className="border-t bg-muted mt-12">
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
      </footer> */}
    </div>
  )
}