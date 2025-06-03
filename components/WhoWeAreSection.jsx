"use client"

import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "./section-heading"
import { StatCard } from "./stat-card"
import { AnimatedButton } from "./animated-button"

export function WhoWeAreSection() {
  return (
    <section className="py-16 bg-muted" id="who-we-are">
      <div className="container">
        <SectionHeading
          title="Who We Are"
          subtitle="RD Models is a premier 3D architectural modeling studio based in Jaipur, Rajasthan, serving clients across India. We specialize in creating detailed and realistic building models for architects, developers, and construction companies nationwide."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Image */}
          <div className="relative h-full w-full min-h-[350px]">
            <Image
              src="/images/rd-brand-img.png"
              alt="Ar. Rohitash Daiya - Founder RD Models"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Right Side: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              number="2000+"
              label="Models Delivered Across India"
              description="Delivered over 1800 high-quality 3D models to clients ..."
              link="/models"
            />
            <StatCard
              number="700+"
              label="Happy Clients Nationwide"
              description="Trusted by over 700 clients nationwide for innovative and precise solutions..."
              link="/clients"
            />
            <StatCard
              number="7+"
              label="Countries"
              description="Serving 28+ states with tailored 3D models for diverse architectural projects..."
              link="/states"
            />
            <StatCard
              number="6+"
              label="Locations"
              description="Over 15 years of expertise in Jaipur, delivering excellence in 3D modeling..."
              link="/about"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          {/* <AnimatedButton>
            <Link href="/about">Learn More About Us</Link>
          </AnimatedButton> */}
        </div>
      </div>
    </section>
  )
}