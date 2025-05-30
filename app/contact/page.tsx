import Link from "next/link"
import Image from "next/image"
import { Building2, Mail, MapPin, Phone, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"
import { AnimatedHeader } from "@/components/animated-header"

export const metadata: Metadata = {
  title: "Contact RD Models - 3D Architectural Modeling Services in Jaipur, India",
  description:
    "Contact RD Models for professional 3D architectural modeling services. Based in Jaipur, Rajasthan, we serve clients across India. Get a quote for your architectural visualization project today.",
  keywords: [
    "contact RD Models",
    "3D modeling quote Jaipur",
    "architectural visualization contact",
    "building models inquiry India",
    "3D modeling services Rajasthan",
    "architectural rendering quote",
  ],
  openGraph: {
    title: "Contact RD Models - 3D Architectural Modeling Services in Jaipur, India",
    description:
      "Contact RD Models for professional 3D architectural modeling services. Based in Jaipur, Rajasthan, we serve clients across India.",
    url: "https://rdmodels.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 z-10" />
          <div className="relative h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?height=600&width=1600"
              alt="Contact RD Models - 3D Architectural Modeling Services in Jaipur"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-forum">
                  Contact Us
                </h1>
                <p className="mt-4 text-lg text-white/90 md:text-xl font-barlow">
                  Get in touch with our Jaipur team for professional 3D architectural modeling services across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeading
              title="Get In Touch"
              subtitle="Ready to bring your architectural vision to life? Contact our expert team in Jaipur for a consultation and quote."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-6 font-forum">Contact Information</h3>
                  <div className="space-y-6 font-barlow">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Our Jaipur Office</p>
                        <p className="text-muted-foreground">
                          123 Modeling Street
                          <br />
                          Malviya Nagar, Jaipur
                          <br />
                          Rajasthan 302017, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91-141-123-4567</p>
                        <p className="text-muted-foreground">+91-98765-43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@rdmodels.com</p>
                        <p className="text-muted-foreground">projects@rdmodels.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">All of India</p>
                        <p className="text-xs text-muted-foreground">Based in Jaipur, Rajasthan</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-8 rounded-lg">
                  <h4 className="font-medium mb-4 font-forum">Business Hours</h4>
                  <div className="space-y-2 text-sm text-muted-foreground font-barlow">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-8 rounded-lg text-white">
                  <h4 className="font-medium mb-4 font-forum">Quick Response Guarantee</h4>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="font-barlow">
                      <p className="text-sm">We respond to all inquiries within 24 hours during business days.</p>
                      <p className="text-xs text-white/80 mt-2">
                        Emergency projects: Call us directly for immediate assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <SectionHeading
              title="Visit Our Jaipur Studio"
              subtitle="Located in the heart of Jaipur, Rajasthan, our studio is equipped with state-of-the-art technology for 3D modeling and visualization."
            />
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="font-barlow">Interactive Map</p>
                  <p className="text-sm">Malviya Nagar, Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Common questions about our 3D modeling services and process"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2 font-forum">What areas do you serve?</h4>
                  <p className="text-muted-foreground font-barlow">
                    While we're based in Jaipur, Rajasthan, we serve clients across all of India including major cities
                    like Delhi, Mumbai, Bangalore, Chennai, Kolkata, and Hyderabad.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 font-forum">How long does a typical project take?</h4>
                  <p className="text-muted-foreground font-barlow">
                    Project timelines vary based on complexity. Simple residential models take 3-5 days, while complex
                    commercial projects may take 2-3 weeks.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 font-forum">Do you work with international clients?</h4>
                  <p className="text-muted-foreground font-barlow">
                    Yes, we work with clients globally. Our team in Jaipur collaborates with architects and developers
                    worldwide through digital communication.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2 font-forum">What file formats do you accept?</h4>
                  <p className="text-muted-foreground font-barlow">
                    We accept AutoCAD drawings, SketchUp files, Revit models, PDF plans, and hand-drawn sketches. Our
                    team can work with any architectural documentation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 font-forum">Can you handle rush projects?</h4>
                  <p className="text-muted-foreground font-barlow">
                    Yes, we offer expedited services for urgent projects. Contact us directly to discuss timeline and
                    pricing for rush orders.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 font-forum">Do you provide revisions?</h4>
                  <p className="text-muted-foreground font-barlow">
                    We include up to 3 rounds of revisions in our standard pricing. Additional revisions can be
                    accommodated at a nominal charge.
                  </p>
                </div>
              </div>
            </div>
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
              © {new Date().getFullYear()} RD Models, Jaipur, Rajasthan, India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
