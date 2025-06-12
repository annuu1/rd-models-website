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
                        <a href="tel:+91-9876543210" className="text-base text-foreground font-barlow hover:underline">+91-9672232299</a>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8">
                    <div className="font-semibold text-primary mb-3 font-barlow">Social Media</div>
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="Facebook">
                        {/* Facebook SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="Twitter">
                        {/* Twitter SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.943 2.21-4.943 4.934 0 .39.045.765.126 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.239-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="Google Plus">
                        {/* Google Plus SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713v-2.427h7.545c.067.37.13.74.13 1.213 0 3.928-2.647 6.7-7.675 6.7-4.425 0-8-3.575-8-8s3.575-8 8-8c2.4 0 4.425.915 6.025 2.425l-2.45 2.425c-.675-.65-1.8-1.4-3.575-1.4-3.05 0-5.525 2.475-5.525 5.55s2.475 5.55 5.525 5.55c3.525 0 4.85-2.025 5.05-3.075h-5.05v-2.425h8.375c.075.425.15.85.15 1.425 0 5.175-3.475 8.825-8.525 8.825-4.675 0-8.5-3.825-8.5-8.5s3.825-8.5 8.5-8.5c2.25 0 4.275.825 5.825 2.175l-2.425 2.425c-.725-.675-1.85-1.4-3.4-1.4-2.825 0-5.125 2.3-5.125 5.125s2.3 5.125 5.125 5.125c3.075 0 4.675-2.1 4.925-3.225h-4.925z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="Pinterest">
                        {/* Pinterest SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.386 7.633 11.124-.105-.943-.2-2.389.042-3.419.219-.964 1.407-6.144 1.407-6.144s-.36-.719-.36-1.781c0-1.668.968-2.915 2.174-2.915 1.025 0 1.52.77 1.52 1.693 0 1.032-.657 2.576-.996 4.013-.283 1.195.6 2.17 1.779 2.17 2.135 0 3.775-2.252 3.775-5.499 0-2.877-2.07-4.892-5.03-4.892-3.434 0-5.444 2.574-5.444 5.236 0 1.034.399 2.146.9 2.747.1.122.113.228.083.351-.09.372-.292 1.195-.332 1.36-.05.2-.163.243-.377.147-1.407-.583-2.283-2.41-2.283-3.882 0-3.162 2.572-6.956 7.673-6.956 4.084 0 6.779 2.949 6.779 6.116 0 4.205-2.34 7.341-5.803 7.341-1.162 0-2.255-.63-2.627-1.347l-.715 2.728c-.217.823-.803 1.852-1.197 2.48C6.841 23.723 9.348 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition" aria-label="Instagram">
                        {/* Instagram SVG */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.974.974 1.246 2.243 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.634-1.308 3.608-.975.975-2.243 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.634-.333-3.608-1.308-.975-.974-1.246-2.243-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.634 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.404 3.678 1.384c-.982.98-1.255 2.092-1.313 3.374C2.014 8.332 2 8.741 2 12c0 3.259.014 3.668.072 4.948.058 1.282.331 2.394 1.313 3.374.981.98 2.093 1.254 3.374 1.313C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.282-.059 2.394-.333 3.374-1.313.98-.98 1.254-2.092 1.313-3.374.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.282-.333-2.394-1.313-3.374-.98-.98-2.092-1.254-3.374-1.313C15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" /></svg>
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
