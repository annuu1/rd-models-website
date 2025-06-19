"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="relative h-16 w-48">
              <Image
                src="/images/logo.png"
                alt="RD Models Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <nav className="flex flex-col gap-2 py-8">
            <Link
              href="/"
              className="text-lg font-medium text-primary hover:text-primary/80 font-barlow px-2 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <button
              type="button"
              aria-expanded={aboutOpen}
              aria-controls="mobile-about-dropdown"
              className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-primary font-barlow px-2 py-2 rounded w-full focus:outline-none"
              onClick={() => setAboutOpen((v) => !v)}
            >
              <span>About</span>
              <span>{aboutOpen ? "▲" : "▼"}</span>
            </button>
            {aboutOpen && (
              <div
                id="mobile-about-dropdown"
                className="flex flex-col gap-1 ml-4 mb-2"
              >
                <Link
                  href="/about"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => {
                    setAboutOpen(false);
                    setOpen(false);
                  }}
                >
                  Know Us
                </Link>
                <Link
                  href="/clients"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => {
                    setAboutOpen(false);
                    setOpen(false);
                  }}
                >
                  Our Clients
                </Link>
              </div>
            )}

            {/* Portfolio Dropdown */}
            <button
              type="button"
              aria-expanded={portfolioOpen}
              aria-controls="mobile-portfolio-dropdown"
              className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-primary font-barlow px-2 py-2 rounded w-full focus:outline-none"
              onClick={() => setPortfolioOpen((v) => !v)}
            >
              <span>Portfolio</span>
              <span>{portfolioOpen ? "▲" : "▼"}</span>
            </button>
            {portfolioOpen && (
              <div
                id="mobile-portfolio-dropdown"
                className="flex flex-col gap-1 ml-4 mb-2"
              >
                <Link
                  href="/gallery/images"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Photos
                </Link>
                <Link
                  href="/gallery/videos"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Videos
                </Link>
              </div>
            )}

            {/* Media Dropdown */}
            <button
              type="button"
              aria-expanded={mediaOpen}
              aria-controls="mobile-media-dropdown"
              className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-primary font-barlow px-2 py-2 rounded w-full focus:outline-none"
              onClick={() => setMediaOpen((v) => !v)}
            >
              <span>Media</span>
              <span>{mediaOpen ? "▲" : "▼"}</span>
            </button>
            {mediaOpen && (
              <div
                id="mobile-media-dropdown"
                className="flex flex-col gap-1 ml-4 mb-2"
              >
                <Link
                  href="/blog"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/publications"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => setOpen(false)}
                >
                  Publications
                </Link>
              </div>
            )}

            <Link
              href="/testimonials"
              className="text-lg font-medium text-muted-foreground hover:text-primary font-barlow px-2 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>

            {/* Contact Dropdown */}
            <button
              type="button"
              aria-expanded={contactOpen}
              aria-controls="mobile-contact-dropdown"
              className="flex items-center justify-between text-lg font-medium text-muted-foreground hover:text-primary font-barlow px-2 py-2 rounded w-full focus:outline-none"
              onClick={() => setContactOpen((v) => !v)}
            >
              <span>Contact</span>
              <span>{contactOpen ? "▲" : "▼"}</span>
            </button>
            {contactOpen && (
              <div
                id="mobile-contact-dropdown"
                className="flex flex-col gap-1 ml-4 mb-2"
              >
                <Link
                  href="/contact"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => {
                    setContactOpen(false);
                    setOpen(false);
                  }}
                >
                  Connect With Us
                </Link>
                <Link
                  href="/careers"
                  className="text-base font-normal text-muted-foreground hover:text-primary font-barlow px-2 py-1 rounded"
                  onClick={() => {
                    setContactOpen(false);
                    setOpen(false);
                  }}
                >
                  Careers
                </Link>
              </div>
            )}
          </nav>
          <div className="mt-auto border-t pt-4">
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Enquire Now
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}