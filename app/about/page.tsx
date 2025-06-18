"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, ChevronDown, ChevronUp, Globe, MapPin, Users, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TeamMember } from "@/components/team-member"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedHeader } from "@/components/animated-header"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { useState } from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

interface StatCardProps {
  number: string
  label: string
  description: string
  icon: React.ReactNode
}

function StatCard({ number, label, description, icon }: StatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const numericValue = parseInt(number.replace(/[^0-9]/g, ""), 10)
  const suffix = number.includes("+") ? "+" : ""

  return (
    <div
      ref={ref}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-primary font-forum mb-2">
        {inView ? (
          <CountUp end={numericValue} duration={2} separator="," suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </h3>
      <p className="text-xl font-semibold text-muted-foreground font-barlow mb-4">{label}</p>
      <div className="text-sm text-muted-foreground font-barlow leading-relaxed">
        <div className="hidden md:block">{description}</div>
        <div className="md:hidden">
          {isExpanded ? (
            <div>
              <p>{description}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="mt-4 text-primary hover:text-primary/80 flex items-center gap-1 font-barlow"
              >
                Read Less <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div>
              <p className="line-clamp-3">{description}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(true)}
                className="mt-4 text-primary hover:text-primary/80 flex items-center gap-1 font-barlow"
              >
                Read More <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 z-10" />
          <div className="relative h-[100vh] min-h-[400px] overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.07 }}
              transition={{ duration: 6, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/images/hero-bg/DSC00275%20copy%283%29-cslE8trs7ccKBrPbijtwnjwoKeQgba.jpg"
                alt="RD Models Team"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="pl-8 md:pl-48 w-full h-full flex items-center">
              <div className="max-w-2xl rounded-xl p-8 flex flex-col items-start text-left">
                <TypewriterEffect
                  words={[
                    "About Us",
                    "Our Story",
                    "Our Achievements",
                  ]}
                  className="text-4xl md:text-6xl lg:text-6xl font-bold text-white/90 font-caveat bg-transparent text-left border-b-4 border-white pb-2"
                />
                <p className="mt-4 text-lg text-white/90 md:text-xl font-forum text-left">
                  Learn about our journey, our team, and our commitment to excellence in 3D architectural modeling.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our Achievements Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <SectionHeading
              title="Our Achievements"
              subtitle="A snapshot of our growth and impact in the 3D modeling industry"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                number="2,000+"
                label="Models Delivered"
                description="At RD Models, a premier model maker, we take pride in our extensive portfolio, having successfully delivered over 2,000 models. Our journey spans from creating small block study models to executing some of the world’s largest and most intricate projects. As a leading model maker, we cater to various scale requirements, from 1:20,000 to life-size 1:1 scale models, showcasing our versatility and capability. Each model we create is a testament to our commitment to precision, quality, and client satisfaction, reinforcing our reputation as a top model maker."
                icon={<Package className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="3+"
                label="Countries"
                description="RD Models, a leading model making company, has an efficient delivery system that allows us to successfully deliver models to clients in 3 countries around the world. Our ability to ship models internationally ensures that no matter where our clients are located, they can rely on us for timely and secure delivery. This global reach underscores our reputation as a reliable model maker capable of handling projects of any scale and complexity, anywhere in the world."
                icon={<Globe className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="700+"
                label="Users"
                description="Our dedication to quality work and exceptional service has helped us build strong, lasting relationships with over 700 clients. As a top model maker, we don’t just create models; we build relationships based on trust and excellence. Our client base includes top-tier corporations, government agencies, and scientific institutions. As a leading model maker, we pride ourselves on understanding our clients’ unique needs and exceeding their expectations."
                icon={<Users className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="8+"
                label="Locations in India"
                description="Maintaining high-quality standards across all our workshops is a challenge we meet with a well-developed, coordinated, and synchronized system. With six strategically located workshops in Jaipur, Delhi, Bangalore, Hyderabad, Ahmedabad, and Mumbai, we ensure that multiple locations can work in parallel to complete projects efficiently. This system not only speeds up the production process but also guarantees that every model meets our stringent quality standards, regardless of where it is produced. As a top model making company, we ensure consistent quality across all our locations."
                icon={<MapPin className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>
        </section>

        {/* Our Story & Mission Section (Side by Side) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum text-center md:text-left">
                  Our Story 
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow text-base md:text-lg">
                  <p>
                    Welcome to RD Models, your premier destination for high-quality scale models. As a leading model maker, RD Models has grown into India’s foremost model making company under the visionary leadership of Rohitash Dahiya. Over the past 12 years, we have been committed to innovation, precision, and unmatched quality. From our humble beginnings in Jaipur, we have expanded nationwide with workshops in Delhi, Bangalore, Hyderabad, Ahmedabad, and Mumbai. Our relentless pursuit of excellence has established us as the go-to model maker for top-tier companies and institutions.
                  </p>
                </div>
              </div>
              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum text-center md:text-left">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow text-base md:text-lg">
                  <p>
                    At RD Models, our mission is to push the boundaries of scale model making. We leverage the latest technologies to create detailed, accurate, and aesthetically pleasing models. As a pioneering model making company, we aim to be the industry benchmark, continually setting new standards of quality and craftsmanship. Our extensive in-house production capabilities, including CNC laser cutting, CNC milling, 5D CNC carving, vacuum forming, and large 3D scanning, enable us to execute complex and intricate projects with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery with Zoom-In Effect */}
        <section className="py-10 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
              {[
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/1.JPG',
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/2.jpg',
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/3.JPG',
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/4.jpg',
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/5.jpg',
                'https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/6.jpg',
              ].map((src, idx) => (
                <motion.div
                  key={src}
                  className="overflow-hidden shadow-md cursor-pointer hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Image
                    src={src}
                    alt={`RD Models Work ${idx + 1}`}
                    width={400}
                    height={260}
                    className="object-cover w-full h-full transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team & Why Choose Us Section (Side by Side) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Our Team */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum text-center md:text-left">
                  Our Team
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow text-lg">
                  <p>
                    The heart of RD Models is our dedicated team of over 100 skilled craftsmen. Their passion and expertise drive our success as a leading model maker. Our team is committed to delivering models that not only meet but exceed client expectations. We take pride in transforming ideas into tangible realities, providing models that serve as powerful tools for visualization and communication.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum text-center md:text-left">
                  Why Choose Us
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow text-lg">
                  <p>
                    What sets RD Models apart as a premier model making company is our unwavering dedication to quality and innovation. We embrace challenging projects, using our advanced technology and extensive experience to create models that are both functional and beautiful. Our clients include industry giants like Tata, Vedanta, L&T, NCC, Reliance, Godrej, and Maruti, as well as government departments and scientific institutions. We are proud to be a trusted partner in bringing their visions to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 md:py-24 bg-primary"
          style={{
            backgroundImage: "url('https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/about-us/ready_to_work_dark.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-forum">Ready to Work With Us?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 font-barlow">
              Contact us today to discuss your project requirements and discover how our 3D modeling services can bring
              your architectural vision to life.
            </p>
            <Button size="lg" variant="outline" asChild className="bg-white hover:bg-white/90 text-primary">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}