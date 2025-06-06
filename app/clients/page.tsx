"use client";

import { motion } from "framer-motion";
import "./page.css";
import FloatingContactButtons from "../FloatingContactButtons";
import Image from "next/image";
import { AnimatedHeader } from "@/components/animated-header";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

// Define the ClientLogos component directly in the same file for simplicity
function ClientLogos() {
  // List of client image filenames from /public/images/clients
  const clientImageFiles = [
    "1519952102385.jfif",
    "1599464154477-Developer-Logo.jpg",
    "1603281560725.jfif",
    "5527Akshat Group.png",
    "9998Mahima Group.png",
    "AKFD_with+Ayush+Kasliwal_color.png",
    "Ashadeep-Group-1420007835004-Ashadeep-Logo-with-TM-jpg.jpg",
    "Ashapurna NRI.webp",
    "Ashiana Housing Limited 4.jpg",
    "Atelier Asthete.jpeg",
    "Bardoya-Group-Logo.jpg",
    "EqntE_jVkAAP5b6.png",
    "First-Stone-logo.jpg",
    "Jaipur-smart-city.jpg",
    "LT-1575460417.jpg",
    "Lalit-roongta-group-logo.jpg",
    "Logo-585x1024.png",
    "Logo-Godrej-Properties-1-350x213-1.jpg",
    "Logo-egis.gif",
    "Manglam-Png.png",
    "PWD-logo.png",
    "SARAS-800x565.jpg",
    "ajmer-development-authority.jpg",
    "anukampa-logo.jpeg",
    "asdad (1).jfif",
    "asdad (4).png",
    "axiom design.jpg",
    "cc.jfif",
    "d822865d1ad12d1221f3ccd254e0478b.jpg",
    "download (1).jfif",
    "download (1).png",
    "download (2).jfif",
    "download (2).png",
    "download (3).jfif",
    "download (3).png",
    "download (4).jfif",
    "download (4).png",
    "download (5).jfif",
    "download (5).png",
    "download (6).png",
    "download (7).jfif",
    "download (7).png",
    "download (8).jfif",
    "download (9).jfif",
    "download.jfif",
    "download.png",
    "images (2).png",
    "images.jfif",
    "images.png",
    "ircon_logo_1606192403870_1606192417901.webp",
    "jdajodhpur-logo.jpg",
    "logo (1).png",
    "logo-2048-pixel.jpg",
    "logo.png",
    "logo1.gif",
    "medium (1).webp",
    "medium.webp",
    "mojika-ultima.jpeg",
    "mps_kalwarroad.png",
    "oB9VfDsl_400x400.jpg",
    "radisson-logo-1.png",
    "silver-logo.png",
    "symphonia-and-graphics-malviya-nagar-jaipur-computer-graphic-designers-rfjzlilox2-250.webp",
    "Samurai-Group.png",
    "Sankalp-Group.png",
    "Shamashish-Group.jpg",
    "Sudama-Plywood.png",
    "Tushar-Sogani-Design-Pvt-ltd.png",
    "Uttam-Builders-&-Developers-Logo-CTC.jpg",
    "Vanshdeep-Builders.png",
    "Mohidin-Properties.png",
    "NRI-Club-21.png",
    "Ocube-Architects.png",
    "Fomerah.jpeg",
    "Green-Brick.png",
  ];

  // Animation variants for the pop-out effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  // Split into 3 rows
  function splitIntoRows(arr: string[], numRows: number) {
    const rows: string[][] = Array.from({ length: numRows }, () => []);
    arr.forEach((item, idx) => {
      rows[idx % numRows].push(item);
    });
    return rows;
  }
  const rows = splitIntoRows(clientImageFiles, 3);

  return (
    <div className="w-full py-8 text-center">
      {rows.map((row, rowIdx) => (
        <motion.div
          key={rowIdx}
          className="flex mb-8 flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {row.map((filename: string, index: number) => {
            const alt = filename.replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "");
            return (
              <motion.div
                key={`${filename}-${index}`}
                className="flex-shrink-0 group"
                variants={logoVariants}
              >
                <div className="relative h-32 w-64 transition-all duration-300 client-logo-hover group-hover:scale-110 group-hover:shadow-2xl">
                  <Image
                    src={`/images/clients/${filename}`}
                    alt={alt}
                    fill
                    className="object-contain client-logo-img"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />
      <main>
        
        <section className="py-8 md:py-8">
          <div className=" mx-auto px-4">
            <Button variant="ghost" size="sm" asChild className="mb-2">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <SectionHeading
              title="Our Clients"
              subtitle="Some of the brands and organizations we've worked with"
            />
            <div className="mt-2">
              <ClientLogos />
            </div>
          </div>
        </section>
      </main>
      <FloatingContactButtons />
    </div>
  );
}