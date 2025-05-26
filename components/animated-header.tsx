"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { motion } from "framer-motion"

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/100 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-20 items-center justify-between py-4">
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <div className="relative h-12 w-32">
            <Image src="/images/rd-logo.png" alt="RD Models Logo" fill className="object-contain" priority />
          </div>
        </motion.div>

        <nav className="hidden lg:flex gap-14">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT" },
            { href: "/portfolio", label: "PORTFOLIO" },
            { href: "/blog", label: "BLOG" },
            { href: "/contact", label: "CONTACT" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                className={`text-base font-small transition-all duration-300 font-grenda relative group ${
                  isScrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-green-400"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
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
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "border border-primary/90 text-primary bg-transparent hover:bg-primary/90 hover:text-white" : "border border-white bg-white/0 text-white hover:bg-white/95 hover:text-primary"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "border border-primary/90 text-primary bg-transparent hover:bg-primary/90 hover:text-white" : "border border-white bg-white/0 text-white hover:bg-white/95 hover:text-primary"
              }`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Button
              variant="outline"
              size="sm"
              className={`hidden md:flex font-grenda text-lg font-light px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
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
  )
}
