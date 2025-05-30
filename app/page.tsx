import { AnimatedHeader } from "@/components/animated-header"
import { HeroSection } from "@/components/hero-section"
import { TeamMember } from "@/components/team-member"
import { StatCard } from "@/components/stat-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { ClientLogos } from "@/components/client-logos"
import { SectionHeading } from "@/components/section-heading"
import { FeaturedProject } from "@/components/featured-project"
import { BlogPreview } from "@/components/blog-preview"
import { AnimatedButton } from "@/components/animated-button"
import Link from "next/link"
import { Building2, Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"
import { FounderSection } from "@/components/founder-section"
import { WhoWeAreSection } from "@/components/WhoWeAreSection"
import InstagramPost from "@/components/instagram-posts"
import Image from "next/image"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "RD Models - Premier 3D Architectural Modeling Services in Jaipur, India",
  description:
    "RD Models is Jaipur's leading 3D architectural modeling company serving all of India. We specialize in detailed building models, interior visualizations, and architectural renderings for architects, developers, and construction companies.",
  keywords: [
    "3D architectural models Jaipur",
    "architectural visualization India",
    "building models Rajasthan",
    "3D modeling services",
    "architectural rendering Jaipur",
    "interior visualization India",
    "construction visualization",
    "architectural model makers Jaipur",
    "3D building design India",
    "architectural services Rajasthan",
  ],
  openGraph: {
    title: "RD Models - Premier 3D Architectural Modeling Services in Jaipur, India",
    description:
      "RD Models is Jaipur's leading 3D architectural modeling company serving all of India. We specialize in detailed building models, interior visualizations, and architectural renderings.",
    url: "https://rdmodels.com",
    images: [
      {
        url: "https://rdmodels.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "RD Models - 3D Architectural Visualization Services in Jaipur",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedHeader />
      <main className="flex-1">
        <HeroSection />
        {/* Founder Section */}
        <section className="py-16 w-full bg-white">
          <div className="sm:pl-64">

            <FounderSection />
          </div>
        </section>

        {/* Who We Are Section with Statistics */}
        <WhoWeAreSection />

        {/* Meet the Team Section */}
        <section className="bg-white py-16 md:py-24" id="team">
          <div className="container">
            <SectionHeading
              title="Meet Our Team"
              subtitle="Our talented team of professionals in Jaipur brings together expertise in architecture, design, and technology to deliver exceptional 3D modeling services across India."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember
                name="CA. Avinash Daiya"
                position="Chief Financial Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/04/Avinash-300x300.png?height=300&width=300"
                bio="With over 10 years of financial expertise, Avinash ensures the company's financial health and strategic growth."
              />
              <TeamMember
                name="Ar. Deeksha Vyas"
                position="Chief Marketing Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/01/Deeksha-pnxqvlmzw1pylhl7ivkogx2fwq65helnihpuu1atvc.png?height=300&width=300"
                bio="An architect by profession, Deeksha leads our marketing efforts with a deep understanding of client needs."
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

        {/* Clients Section */}
        <section className="py-16 bg-muted" id="clients">
          <div className="text-center">
            <SectionHeading
              title="Our Clients Across India"
              subtitle="We've had the privilege of working with leading architects, developers, and construction companies from all over India."
            />
            <ClientLogos />
            <AnimatedButton
              size="lg"
              className="mt-8 bg-primary text-white border border-transparent hover:bg-transparent hover:border-[1px] hover:border-primary hover:text-primary transition-all duration-200"
            >
              View All Clients
            </AnimatedButton>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24" id="testimonials">
          <div className="container">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="We take pride in the relationships we build with our clients. Their words speak volumes about our commitment to quality, creativity, and customer satisfaction"
            />
            <TestimonialSlider />
          </div>
        </section>

        {/* Instagram Posts Section */}
        <section className="bg-muted py-16 md:py-24" id="instagram">
          <div className="">
            <SectionHeading
              title="Instagram Handle"
              subtitle="Check out our latest Instagram posts for inspiration and updates from our Jaipur studio."
            />
            <InstagramPost />

          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-8 w-24">
                </div>
              </div>
              <p className="text-muted-foreground max-w-xs font-barlow mb-4">
                Leading 3D architectural modeling company based in Jaipur, Rajasthan, serving clients across India with
                detailed building models and visualizations.
              </p>
              <div className="text-sm text-muted-foreground font-barlow">
                <p>📍 Jaipur, Rajasthan, India</p>
                <p>🇮🇳 Serving all of India</p>
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
                  <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
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
              <h3 className="font-medium mb-4 font-forum">Services</h3>
              <ul className="space-y-2 font-barlow">
                <li>
                  <span className="text-muted-foreground">3D Architectural Models</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Interior Visualization</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Construction Visualization</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Architectural Rendering</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground font-barlow">
              © {new Date().getFullYear()} RD Models, Jaipur, Rajasthan, India. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
