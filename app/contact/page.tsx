import Link from "next/link"
import Image from "next/image"
import { Building2, Mail, MapPin, Phone, Clock, Instagram, Twitter, Facebook } from "lucide-react"
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
      name: "Mumbai",
      address: [
        "503, Ashirwad CHS",
        "JB Nagar, Andheri East",
        "Mumbai, Maharastra, 400047"
      ]
    },
    {
      name: "Hyderabad",
      address: [
        "G2, N block, Rainbow Vistas Rock Garden",
        "Hyderabad, Telangana, 500018"
      ]
    },
    {
      name: "Bangalore",
      address: [
        "5, Raja Ram Mohan, Sampangi Rama Nagara",
        "Bengaluru, Karnataka 560025"
      ]
    },
    {
      name: "Chennai",
      address: [
        "Near Shaik Ali Subedar St, Park Town",
        "Chennai, Tamil Nadu 600003"
      ]
    },
    {
      name: "Pune",
      address: [
        "J-556, Tropics Apartments, Near Sameer Lawns, Ravet",
        "Pune. 412101"
      ]
    },
    {
      name: "Ahmedabad",
      address: [
        "89, Behind green park society, New RTO road",
        "Ahemdabad, Gujrat, 382410"
      ]
    },
    {
      name: "Delhi",
      address: [
        "SHED NO. 41, Scheme-1, Okhla Industrial Area, Ph.2",
        "New Delhi-110020"
      ]
    },
    {
      name: "Jaipur",
      address: [
        "84/54, Sector 8, Sector 9, Pratap Nagar",
        "Jaipur, Rajasthan 302033"
      ]
    },
    {
      name: "Chandigarh",
      address: [
        "Udyog Path, Sector 22B",
        "Chandigarh, 160022"
      ]
    },
    {
      name: "Lucknow",
      address: [
        "Seth Ramjas Rd, Hazratganj",
        "Lucknow, Uttar Pradesh 226001"
      ]
    },
    {
      name: "Indore",
      address: [
        "Tilak Path, Bhangiya, Rajwada",
        "Indore, Madhya Pradesh 452007"
      ]
    },
    {
      name: "Guwahati",
      address: [
        "AK Dev Rd, GARCHUK",
        "Guwahati, Assam 781035"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main>
        {/* Hero Section */}
        {/* <section className="relative">
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
        </section> */}

        {/* Contact Form and Info Section */}
        <section className="py-16 md:py-12">
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
                  <div className="flex flex-col gap-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </span>
                      <div>
                        <div className="font-semibold text-primary font-barlow">Email Address</div>
                        <a href="mailto:jaipur@rdmodels.com" className="text-base text-foreground font-barlow hover:underline">rdarmodels@gmail.com</a>
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </span>
                      <div>
                        <div className="font-semibold text-primary font-barlow">Call Us</div>
                        <a href="tel:+91-9672232299" className="text-base text-foreground font-barlow hover:underline">+91-9672232299</a>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8">
                    <div className="font-semibold text-primary mb-3 font-barlow">Social Media</div>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Facebook">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00aced] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e4405f] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-muted p-8 rounded-lg">
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
                </div> */}

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
                    {/* <div className="text-sm text-muted-foreground font-barlow">
                      <span className="font-medium">Phone:</span> {loc.phone}
                    </div>
                    <div className="text-sm text-muted-foreground font-barlow">
                      <span className="font-medium">Email:</span> {loc.email}
                    </div> */}
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

      {/* <footer className="border-t bg-muted">
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
      </footer> */}
    </div>
  )
}
