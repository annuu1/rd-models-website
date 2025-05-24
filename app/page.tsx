import { AnimatedHeader } from "@/components/animated-header"
import { HeroSection } from "@/components/hero-section"
import FounderSection from "@/components/founder-section"
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
        <FounderSection />

        {/* Featured Project Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <SectionHeading
              title="Featured Project"
              subtitle="Explore our latest and most impressive 3D modeling work from our Jaipur studio"
            />
            <FeaturedProject />
            <div className="text-center mt-10">
              <AnimatedButton>
                <Link href="/portfolio">View All Projects</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Who We Are Section with Statistics */}
        <section className="py-16 bg-muted" id="who-we-are">
          <div className="container">
            <SectionHeading
              title="Leading 3D Modeling Company in Jaipur, India"
              subtitle="RD Models is a premier 3D architectural modeling studio based in Jaipur, Rajasthan, serving clients across India. We specialize in creating detailed and realistic building models for architects, developers, and construction companies nationwide."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard number="1800+" label="Models Delivered Across India" />
              <StatCard number="700+" label="Happy Clients Nationwide" />
              <StatCard number="28+" label="States Served" />
              <StatCard number="15+" label="Years in Jaipur" />
            </div>
            <div className="text-center mt-10">
              <AnimatedButton>
                <Link href="/about">Learn More About Us</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-16 md:py-24" id="services">
          <div className="container">
            <SectionHeading
              title="Our 3D Modeling Services"
              subtitle="Comprehensive architectural visualization services from our Jaipur studio for clients across India"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">3D Architectural Models</h3>
                <p className="text-muted-foreground font-barlow">
                  Detailed exterior and interior 3D models for residential, commercial, and institutional projects
                  across India.
                </p>
              </div>
              <div className="bg-muted p-8 rounded-lg">
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
                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
                    <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
                    <path d="M9 9h6" />
                    <path d="M9 13h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Interior Visualization</h3>
                <p className="text-muted-foreground font-barlow">
                  Photorealistic interior renderings and virtual tours for residential and commercial spaces.
                </p>
              </div>
              <div className="bg-muted p-8 rounded-lg">
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
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 font-forum">Construction Visualization</h3>
                <p className="text-muted-foreground font-barlow">
                  Phase-wise construction visualization and progress modeling for project management and marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-muted py-16 md:py-24" id="team">
          <div className="container">
            <SectionHeading
              title="Meet Our Jaipur Team"
              subtitle="Our talented team of professionals in Jaipur brings together expertise in architecture, design, and technology to deliver exceptional 3D modeling services across India."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember
                name="CA. Avinash Daiya"
                position="Chief Financial Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/04/Avinash-300x300.png?height=300&width=300"
                bio="With over 15 years of financial expertise, Avinash ensures the company's financial health and strategic growth across India."
              />
              <TeamMember
                name="Ar. Deeksha Vyas"
                position="Chief Marketing Officer"
                image="https://rdmodels.com/wp-content/uploads/2025/01/Deeksha-pnxqvlmzw1pylhl7ivkogx2fwq65helnihpuu1atvc.png?height=300&width=300"
                bio="An architect by training, Deeksha leads our marketing efforts with a deep understanding of client needs across India."
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

        {/* Latest Blog Posts */}
        <section className="py-16 bg-white" id="blog">
          <div className="container">
            <SectionHeading
              title="Latest from Our Blog"
              subtitle="Insights, trends, and expertise from the world of 3D architectural modeling in India"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlogPreview
                title="Sometimes Rome Is Built in a Day—Or Less"
                excerpt="Walk into any architecture studio and you'll likely spot a physical model sitting quietly in a corner. At RD Models, we believe it's time to recognise architectural model making for what it truly is: an art form."
                date="December 15, 2024"
                author="RD Models Team"
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?height=400&width=600"
                slug="sometimes-rome-is-built-in-a-day"
              />
              <BlogPreview
                title="The Future of Architectural Visualization in India"
                excerpt="Explore how emerging technologies are transforming the way architects and developers visualize projects across India's growing construction industry."
                date="November 28, 2024"
                author="Deeksha Vyas"
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?height=400&width=600"
                slug="future-of-architectural-visualization"
              />
              <BlogPreview
                title="3D Modeling Techniques for Indian Architecture"
                excerpt="Learn about specialized techniques for creating photorealistic visualizations of traditional and modern Indian architectural styles."
                date="November 10, 2024"
                author="Pushpkant Yadav"
                image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?height=400&width=600"
                slug="3d-modeling-techniques-indian-architecture"
              />
            </div>
            <div className="text-center mt-10">
              <AnimatedButton>
                <Link href="/blog">View All Articles</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-muted" id="clients">
          <div className="container">
            <SectionHeading
              title="Our Clients Across India"
              subtitle="We've had the privilege of working with leading architects, developers, and construction companies from Jaipur to Mumbai, Delhi to Bangalore."
            />
            <ClientLogos />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24" id="testimonials">
          <div className="container">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Testimonials from architects, developers, and construction companies across India who have worked with our Jaipur-based team."
            />
            <TestimonialSlider />
          </div>
        </section>

        <section className="container py-16 md:py-24" id="contact">
          <SectionHeading
            title="Get In Touch"
            subtitle="Interested in our services? Fill out the form below and we'll get back to you as soon as possible."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6 font-forum">Contact Information</h3>
                <div className="space-y-4 font-barlow">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">123 Modeling Street, Design District, Jaipur, Rajasthan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91-141-123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@rdmodels.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 font-barlow">
                  <h4 className="font-medium mb-3">Working Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 font-forum">Ready to Bring Your Vision to Life?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 font-barlow">
              Contact our Jaipur team today to discuss your 3D modeling requirements. We serve clients across India with
              world-class architectural visualization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
                <Link href="/contact">Get a Quote</Link>
              </AnimatedButton>
              <AnimatedButton variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/portfolio">View Portfolio</Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative h-8 w-24">
                  <Image src="/images/rd-logo.png" alt="RD Models Logo" fill className="object-contain" />
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
