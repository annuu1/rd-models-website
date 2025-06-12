"use client"
import Link from "next/link"
import Image from "next/image"
import { Building2, ChevronDown, ChevronUp, Globe, MapPin, Users, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TeamMember } from "@/components/team-member"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedHeader } from "@/components/animated-header"
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
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.3, // Start when 30% of the card is visible
  })

  // Extract numeric part from number (e.g., "1,800+" -> 1800)
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
        {/* Full description on medium screens and above */}
        <div className="hidden md:block">{description}</div>
        {/* Collapsible description for mobile */}
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
          <div className="relative h-[70vh] min-h-[400px]">
            <Image
              src="/images/hero-bg/hero-bg2.jpg"
              alt="RD Models Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
          </div>
          {/* <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl mx-auto bg-black/40 rounded-xl p-8 shadow-lg backdrop-blur-md flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-forum">
                  About RD Models
                </h1>
                <p className="mt-4 text-lg text-white/90 md:text-xl font-barlow">
                  Learn about our journey, our team, and our commitment to excellence in 3D architectural modeling.
                </p>
              </div>
            </div>
          </div> */}
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
                number="1,800+"
                label="Models Delivered"
                description="At RD Models, a premier model maker, we take pride in our extensive portfolio, having successfully delivered over 1,800 models. Our journey spans from creating small block study models to executing some of the world’s largest and most intricate projects. As a leading model maker, we cater to various scale requirements, from 1:20,000 to life-size 1:1 scale models, showcasing our versatility and capability. Each model we create is a testament to our commitment to precision, quality, and client satisfaction, reinforcing our reputation as a top model maker."
                icon={<Package className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="7+"
                label="Countries"
                description="RD Models, a leading model making company, has an efficient delivery system that allows us to successfully deliver models to clients in 7 countries around the world. Our ability to ship models internationally ensures that no matter where our clients are located, they can rely on us for timely and secure delivery. This global reach underscores our reputation as a reliable model maker capable of handling projects of any scale and complexity, anywhere in the world."
                icon={<Globe className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="700+"
                label="Clients"
                description="Our dedication to quality work and exceptional service has helped us build strong, lasting relationships with over 700 clients. As a top model maker, we don’t just create models; we build relationships based on trust and excellence. Our client base includes top-tier corporations, government agencies, and scientific institutions. As a leading model maker, we pride ourselves on understanding our clients’ unique needs and exceeding their expectations, which has earned us a loyal and diverse clientele."
                icon={<Users className="h-6 w-6 text-primary" />}
              />
              <StatCard
                number="6+"
                label="Locations"
                description="Maintaining high-quality standards across all our workshops is a challenge we meet with a well-developed, coordinated, and synchronized system. With six strategically located workshops in Jaipur, Delhi, Bangalore, Hyderabad, Ahmedabad, and Mumbai, we ensure that multiple locations can work in parallel to complete projects efficiently. This system not only speeds up the production process but also guarantees that every model meets our stringent quality standards, regardless of where it is produced. As a top model making company, we ensure consistent quality across all our locations."
                icon={<MapPin className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>
        </section>


        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow">
                  <p>
                    Founded in 2010, RD Models began as a small team of architects and 3D artists with a shared vision:
                    to bridge the gap between architectural concepts and realistic visualization. What started as a
                    boutique studio has grown into a leading 3D modeling company serving clients worldwide.
                  </p>
                  <p>
                    Over the years, we've expanded our team, refined our processes, and embraced cutting-edge
                    technologies to deliver exceptional 3D models that bring architectural visions to life. Our journey
                    has been marked by a commitment to quality, attention to detail, and a passion for architectural
                    visualization.
                  </p>
                  <p>
                    Today, RD Models is recognized for its technical expertise, artistic vision, and client-centered
                    approach. We continue to push the boundaries of what's possible in 3D modeling, helping architects,
                    developers, and construction companies communicate their ideas with clarity and impact.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?height=800&width=1200"
                  alt="RD Models Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-none">
                <Image
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                  alt="Mission at RD Models"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow">
                  <p>
                    At RD Models, our mission is to push the boundaries of scale model making. We leverage the latest technologies to create detailed, accurate, and aesthetically pleasing models. As a pioneering model making company, we aim to be the industry benchmark, continually setting new standards of quality and craftsmanship. Our extensive in-house production capabilities, including CNC laser cutting, CNC milling, 5D CNC carving, vacuum forming, and large 3D scanning, enable us to execute complex and intricate projects with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team & Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum">
                  Our Team
                </h2>
                <div className="space-y-4 text-muted-foreground font-barlow text-lg">
                  <p>
                    The heart of RD Models is our dedicated team of over 100 skilled craftsmen. Their passion and expertise drive our success as a leading model maker. Our team is committed to delivering models that not only meet but exceed client expectations. We take pride in transforming ideas into tangible realities, providing models that serve as powerful tools for visualization and communication.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6 font-forum">
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

        {/* Our Services Section */}
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
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

      {/* <footer className="border-t bg-muted">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-forum">RD Models</span>
            </div>
            <p className="text-sm text-muted-foreground font-barlow">
              © {new Date().getFullYear()} RD Models. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}