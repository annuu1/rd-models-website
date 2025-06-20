"use client"

import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "./section-heading"
import { StatCard } from "./stat-card"
import { AnimatedButton } from "./animated-button"
import styles from "./WhoWeAreSection.module.css";

export function WhoWeAreSection() {
  return (
    <section className="py-12 md:py-16 bg-muted" id="who-we-are">
      <div className="container">
        <SectionHeading
          title="Who We Are"
          subtitle="RD Models is a premier 3D architectural modeling studio based in Jaipur, Rajasthan, serving clients across India. We specialize in creating detailed and realistic building models for architects, developers, and construction companies nationwide."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Image */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 500, height: 500 }}>
              {/* Animated Borders */}
              <div className={styles["image-border-animated"]}>
                <div className={`${styles["border-line"]} ${styles["left"]}`}></div>
                <div className={`${styles["border-line"]} ${styles["right"]}`}></div>
              </div>
              <Image
                src="/images/rd-brand-img.png"
                alt="Ar. Rohitash Daiya - Founder RD Models"
                fill
                className="object-contain z-10"
                priority
              />
            </div>
          </div>
          {/* Right Side: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard
              number="2000+"
              label="Models Delivered Across India"
              description="Delivered over 2000 high-quality 3D models to clients ..."
              link="/about"
            />
            <StatCard
              number="700+"
              label="Happy Clients Nationwide"
              description="Trusted by over 700 clients nationwide for innovative and precise solutions..."
              link="/about"
            />
            <StatCard
              number="3+"
              label="Countries"
              description="Serving 3 countries with tailored 3D models for diverse architectural projects..."
              link="/about"
            />
            <StatCard
              number="8+"
              label="Locations in India"
              description="Over 8 locations in India, delivering excellence in 3D modeling..."
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