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
  const locations = [
    {
      name: "Jaipur Office",
      address: [
        "123 Modeling Street",
        "Malviya Nagar, Jaipur",
        "Rajasthan 302017, India"
      ],
      phone: "+91-141-123-4567",
      email: "jaipur@rdmodels.com"
    },
    {
      name: "Delhi Office",
      address: [
        "45 Connaught Place",
        "New Delhi",
        "Delhi 110001, India"
      ],
      phone: "+91-11-2345-6789",
      email: "delhi@rdmodels.com"
    },
    {
      name: "Mumbai Office",
      address: [
        "12 Marine Drive",
        "Churchgate, Mumbai",
        "Maharashtra 400020, India"
      ],
      phone: "+91-22-1234-5678",
      email: "mumbai@rdmodels.com"
    },
    {
      name: "Bangalore Office",
      address: [
        "88 Residency Road",
        "Bangalore",
        "Karnataka 560025, India"
      ],
      phone: "+91-80-9876-5432",
      email: "bangalore@rdmodels.com"
    },
    {
      name: "Hyderabad Office",
      address: [
        "5-9-300 Banjara Hills",
        "Hyderabad",
        "Telangana 500034, India"
      ],
      phone: "+91-40-1234-5678",
      email: "hyderabad@rdmodels.com"
    },
    {
      name: "Kolkata Office",
      address: [
        "21 Park Street",
        "Kolkata",
        "West Bengal 700016, India"
      ],
      phone: "+91-33-2468-1357",
      email: "kolkata@rdmodels.com"
    },
  ];
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
              alt="Contact RD Models - 3D Architectural Modeling Services in Jaipur"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl mx-auto bg-black/40 rounded-xl p-8 shadow-lg backdrop-blur-md flex flex-col items-center text-center">
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

        {/* Locations Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <SectionHeading
              title="Our Locations"
              subtitle="Find our offices and studios across India."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {locations.map((loc, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-6 flex md:flex-col gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary font-forum">{loc.name}</h4>
                    <div className="text-muted-foreground font-barlow">
                      {loc.address.map((line, i) => (
                        <span key={i}>
                          {line}
                          {/* <br /> */}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground font-barlow">
                      <span className="font-medium">Phone:</span> {loc.phone}
                    </div>
                    <div className="text-sm text-muted-foreground font-barlow">
                      <span className="font-medium">Email:</span> {loc.email}
                    </div>
                  </div>
                  <div className="flex-1 min-w-[220px] max-w-full">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address.join(", ").replace(/\n/g, " "))}&output=embed`}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map for ${loc.name}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <SectionHeading
              title="Visit Us"
              subtitle="Located in the heart of Jaipur, Rajasthan, our studio is equipped with state-of-the-art technology for 3D modeling and visualization."
            />
            <div className="overflow-hidden rounded-lg my-8">
                  <iframe
                    src="https://www.google.com/maps?q=84/54,+Sector+8,+Sector+9,+Pratap+Nagar,+Jaipur,+Rajasthan+302033&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RD Models Location"
                  ></iframe>
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
