"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaGlobeAsia, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
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
    <footer className="border-t bg-muted">
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
              <p>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  aria-label="Phone number"
                >
                  <FaPhone className="h-4 w-4" />
                  +91 9876543210
                </a>
              </p>
              <p>
                <a
                  href="mailto:rdarmodels@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  aria-label="Email address"
                >
                  <FaEnvelope className="h-4 w-4" />
                  rdarmodels@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/rd-models"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/rd.models"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com/rd_models"
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
                <Link href="/gallery/images" className="text-muted-foreground hover:text-primary">
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
    </footer>
  );
}