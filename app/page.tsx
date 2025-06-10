import { AnimatedHeader } from "@/components/animated-header"
import FloatingContactButtons from "./FloatingContactButtons";
import { Footer } from "../components/Footer";
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
          <div className="px-2 sm:px-8">
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
              href="/clients"
              size="lg"
              className="mt-8 bg-primary text-white border border-transparent hover:bg-transparent hover:border-[1px] hover:border-primary hover:text-primary transition-all duration-200"
            >
              View All Clients
            </AnimatedButton>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-8" id="testimonials">
          <div className="">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="We take pride in the relationships we build with our clients. Their words speak volumes about our commitment to quality, creativity, and customer satisfaction."
            />
            <TestimonialSlider />
          </div>
        </section>

        {/* Instagram Posts Section */}
        <section className="bg-muted py-16 md:py-8" id="instagram">
          <div className="">
            <SectionHeading
              title="Instagram Handle"
              subtitle="Check out our latest Instagram posts for inspiration and updates."
            />
            <InstagramPost />

          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      {/* <Footer /> */}

      <FloatingContactButtons />
    </div>
  )
}
