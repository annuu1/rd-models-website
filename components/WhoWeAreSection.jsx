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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="relative h-96 w-full">
            <Image
              src="/who-we-are-placeholder.jpg"
              alt="RD Models Studio"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          {/* Right Side: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top Row: Cards with Hover Effect */}
            <div className="group relative">
              <StatCard number="1800+" label="Models Delivered Across India" />
              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                <p className="text-center text-sm mb-2">
                  Delivered over 1800 high-quality 3D models to clients across India, enhancing architectural visualization.
                </p>
                <AnimatedButton>
                  <Link href="/models" className="text-sm">Show More</Link>
                </AnimatedButton>
              </div>
            </div>
            <div className="group relative">
              <StatCard number="700+" label="Happy Clients Nationwide" />
              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-white">
                <p className="text-center text-sm mb-2">
                  Trusted by over 700 clients nationwide for innovative and precise 3D modeling solutions.
                </p>
                <AnimatedButton>
                  <Link href="/clients" className="text-sm">Show More</Link>
                </AnimatedButton>
              </div>
            </div>
            
            {/* Bottom Row: Cards with Persistent Description */}
            <div className="group relative">
              <StatCard number="28+" label="States Served" />
              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex flex-col justify-center items-center p-4 text-white">
                <p className="text-center text-sm mb-2">
                  Serving 28+ states with tailored 3D models for diverse architectural projects.
                </p>
                <AnimatedButton className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/states" className="text-sm">Show More</Link>
                </AnimatedButton>
              </div>
            </div>
            <div className="group relative">
              <StatCard number="15+" label="Years in Jaipur" />
              <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg flex flex-col justify-center items-center p-4 text-white">
                <p className="text-center text-sm mb-2">
                  Over 15 years of expertise in Jaipur, delivering excellence in 3D modeling.
                </p>
                <AnimatedButton className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="/about" className="text-sm">Show More</Link>
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <AnimatedButton>
            <Link href="/about">Learn More About Us</Link>
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}