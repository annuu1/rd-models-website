import Link from "next/link"
import Image from "next/image"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { StatCard } from "@/components/stat-card"
import { TeamMember } from "@/components/team-member"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedHeader } from "@/components/animated-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 z-10" />
          <div className="relative h-[400px]">
            <Image
              src="https://premier3d.com.au/wp-content/uploads/2022/01/DSC05202-Custom-min.jpg?height=800&width=1600"
              alt="RD Models Team"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-forum">
                  About RD Models
                </h1>
                <p className="mt-4 text-lg text-white/90 md:text-xl font-barlow">
                  Learn about our journey, our team, and our commitment to excellence in 3D architectural modeling.
                </p>
              </div>
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

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide our work and define our approach to 3D modeling"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Excellence</h3>
                <p className="text-muted-foreground font-barlow">
                  We strive for excellence in every project, pushing the boundaries of what's possible in 3D modeling to
                  deliver exceptional results that exceed client expectations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Integrity</h3>
                <p className="text-muted-foreground font-barlow">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our
                  clients and partners through reliable service and clear communication.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12h5" />
                    <path d="M17 12h5" />
                    <path d="M12 2v5" />
                    <path d="M12 17v5" />
                    <path d="M12 12 2 2" />
                    <path d="m12 12 10 10" />
                    <path d="m12 12 10-10" />
                    <path d="m12 12-10 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Innovation</h3>
                <p className="text-muted-foreground font-barlow">
                  We embrace new technologies and techniques, constantly innovating to improve our processes and deliver
                  cutting-edge 3D modeling solutions that keep our clients ahead of the curve.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Attention to Detail</h3>
                <p className="text-muted-foreground font-barlow">
                  We believe that the smallest details make the biggest difference. Our meticulous approach ensures that
                  every element of our 3D models is crafted with precision and care.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Client-Centered</h3>
                <p className="text-muted-foreground font-barlow">
                  We put our clients at the center of everything we do, listening to their needs, understanding their
                  vision, and collaborating closely to deliver results that align with their goals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 2 2 6-6" />
                    <path d="m7 16 2 2 6-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Reliability</h3>
                <p className="text-muted-foreground font-barlow">
                  We deliver on our promises, meeting deadlines and maintaining consistent quality across all projects.
                  Our clients can count on us for dependable service and reliable results.
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
              <StatCard number="1800+" label="Models Delivered" />
              <StatCard number="700+" label="Happy Clients" />
              <StatCard number="7+" label="Countries" />
              <StatCard number="6+" label="Locations" />
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <SectionHeading
              title="Meet Our Leadership Team"
              subtitle="The talented professionals guiding our company's vision and operations"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember
                name="CA. Avinash Daiya"
                position="Chief Financial Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/04/Avinash-300x300.png?height=300&width=300"
                bio="With over 15 years of financial expertise, Avinash ensures the company's financial health and strategic growth."
              />
              <TeamMember
                name="Ar. Deeksha Vyas"
                position="Chief Marketing Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/01/Deeksha-pnxqvlmzw1pylhl7ivkogx2fwq65helnihpuu1atvc.png?height=300&width=300"
                bio="An architect by training, Deeksha leads our marketing efforts with a deep understanding of client needs and industry trends."
              />
              <TeamMember
                name="Er. Pushpkant Yadav"
                position="Chief Technology Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/04/Pushpkant-ji-1-300x300.png?height=300&width=300"
                bio="Pushpkant brings cutting-edge technical expertise to our modeling processes, constantly innovating our technological capabilities."
              />
            </div>
          </div>
        </section>

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

      <footer className="border-t bg-muted">
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
      </footer>
    </div>
  )
}
