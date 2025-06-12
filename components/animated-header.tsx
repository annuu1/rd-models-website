"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { motion } from "framer-motion";

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
      setIsScrolled(true);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/100 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex h-20 items-center justify-between py-4 px-10">
        <motion.div
          className="flex items-center gap-3"
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

        <nav className="hidden lg:flex gap-14 flex-1 justify-center">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT" },
            { href: "/gallery/images", label: "PORTFOLIO" },
            { href: "/blog", label: "MEDIA" },
            { href: "/testimonials", label: "TESTIMONIALS" },
            { href: "/contact", label: "CONTACT" },
          ].map((item, index) => {
            if(item.label === "MEDIA"){
              return(
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="relative group">
              <span className={`link-underline relative inline-block text-base font-small transition-colors duration-300 font-grenda ${isScrolled ? "text-primary hover:text-primary" : "text-white hover:text-white-400"}`}>MEDIA</span>
              <div className="flex flex-col absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 p-2">
                <Link href="/blog" className="link-underline block px-4 py-2 text-primary hover:bg-primary/0">BLOG</Link>
                <Link href="/publications" className="link-underline block px-4 py-2 text-primary hover:bg-primary/0 text-nowrap ">PUBLICATIONS</Link>
              </div>
            </div>
          </motion.div>
              )
            }else if(item.label === "PORTFOLIO"){
              return(
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="relative group">
              <span className={`link-underline relative inline-block text-base font-small transition-colors duration-300 font-grenda ${isScrolled ? "text-primary hover:text-primary" : "text-white hover:text-white-400"}`}>PORTFOLIO</span>
              <div className="flex flex-col absolute left-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 p-2">
                <Link href="/gallery/images" className="link-underline block px-4 py-2 text-primary hover:bg-primary/0">Photos</Link>
                <Link href="/gallery/videos" className="link-underline block px-4 py-2 text-primary hover:bg-primary/0">Videos</Link>
              </div>
            </div>
          </motion.div>
              )
            }
            return(
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                className={`link-underline relative inline-block text-base font-small transition-colors duration-300 font-grenda ${isScrolled ? "text-primary hover:text-primary" : "text-white hover:text-white-400"
                  } `}
              >
                {item.label}
              </Link>

            </motion.div>
          )})}
        </nav>


        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="tel:+911411234567"
              className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                  ? "border border-primary/90 text-primary bg-transparent hover:bg-primary/90 hover:text-white"
                  : "border border-white bg-white/0 text-white hover:bg-white/95 hover:text-primary"
                }`}
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 ${isScrolled
                  ? "border border-primary/90 text-primary bg-transparent hover:bg-primary/90 hover:text-white"
                  : "border border-white bg-white/0 text-white hover:bg-white/95 hover:text-primary"
                }`}
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="sm"
              className={`hidden md:flex font-grenda text-lg font-light px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-primary bg-transparent"
                }`}
              asChild
            >
              <Link href="/contact">ENQUIRE</Link>
            </Button>
          </motion.div>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
