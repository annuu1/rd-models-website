"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Mail, Phone, Clock, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { MobileMenu } from "@/components/mobile-menu"
import { AnimatedHeader } from "@/components/animated-header"

export default function ContactPage() {
  const locations = [
    {
      name: "Mumbai",
      address: [
        "503, Ashirwad CHS",
        "JB Nagar, Andheri East",
        "Mumbai, Maharastra, 400047"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506699/mumbi_me4vl8.jpg"
    },
    {
      name: "Hyderabad",
      address: [
        "G2, N block, Rainbow Vistas Rock Garden",
        "Hyderabad, Telangana, 500018"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506114/photo_2_2025-06-21_17-10-41_gx5pmz.jpg"
    },
    {
      name: "Bangalore",
      address: [
        "5, Raja Ram Mohan, Sampangi Rama Nagara",
        "Bengaluru, Karnataka 560025"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506113/photo_5_2025-06-21_17-10-41_o9rulc.jpg"
    },
    {
      name: "Chennai",
      address: [
        "Near Shaik Ali Subedar St, Park Town",
        "Chennai, Tamil Nadu 600003"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506113/photo_8_2025-06-21_17-10-41_buvktm.jpg"
    },
    {
      name: "Pune",
      address: [
        "J-556, Tropics Apartments, Near Sameer Lawns, Ravet",
        "Pune. 412101"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506113/photo_6_2025-06-21_17-10-41_ukvxuy.jpg"
    },
    {
      name: "Ahmedabad",
      address: [
        "89, Behind green park society, New RTO road",
        "Ahemdabad, Gujrat, 382410"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506114/photo_1_2025-06-21_17-10-41_jpnv3h.jpg"
    },
    {
      name: "Delhi",
      address: [
        "SHED NO. 41, Scheme-1, Okhla Industrial Area, Ph.2",
        "New Delhi-110020"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506113/photo_7_2025-06-21_17-10-41_gjhgjd.jpg"
    },
    {
      name: "Jaipur",
      address: [
        "84/54, Sector 8, Sector 9, Pratap Nagar",
        "Jaipur, Rajasthan 302033"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506113/photo_4_2025-06-21_17-10-41_pxkcem.jpg"
    },
    {
      name: "Chandigarh",
      address: [
        "Udyog Path, Sector 22B",
        "Chandigarh, 160022"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750506114/photo_3_2025-06-21_17-10-41_xh6but.jpg"
    },
    {
      name: "Lucknow",
      address: [
        "Seth Ramjas Rd, Hazratganj",
        "Lucknow, Uttar Pradesh 226001"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750507451/photo_2025-06-21_17-33-58_w8mgvp.jpg"
    },
    {
      name: "Indore",
      address: [
        "Tilak Path, Bhangiya, Rajwada",
        "Indore, Madhya Pradesh 452007"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750507343/photo_2025-06-21_17-32-08_kpfqf1.jpg"
    },
    {
      name: "Guwahati",
      address: [
        "AK Dev Rd, GARCHUK",
        "Guwahati, Assam 781035"
      ],
      iconicImage: "https://res.cloudinary.com/dp8l2hrt1/image/upload/v1750507503/photo_2025-06-21_17-34-53_i1gvlg.jpg"
    }
  ];

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "While we're based in Jaipur, Rajasthan, we serve clients across all of India including major cities like Delhi, Mumbai, Bangalore, Chennai, Kolkata, and Hyderabad."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple residential models take 1-2 weeks, while complex commercial projects may take 3-4 weeks."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally. Our team in Jaipur collaborates with architects and developers worldwide through digital communication."
    },
    {
      question: "Can you handle rush projects?",
      answer: "Yes, we offer expedited services for urgent projects. Contact us directly to discuss timeline and pricing for rush orders."
    },
    {
      question: "Can you handle large-scale projects?",
      answer: "Absolutely! Our team has experience with both small residential models and large commercial developments, ensuring quality at any scale."
    },
    {
      question: "Do you provide revisions?",
      answer: "We include up to 3 rounds of revisions in our standard pricing. Additional revisions can be accommodated at a nominal charge."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main>
        {/* Contact Form and Info Section */}
        <section className="py-16 md:py-12">
          <div className="container">
            <SectionHeading
              title="Get In Touch"
              subtitle="Ready to bring your architectural vision to life? Contact our expert team for a consultation and quote."
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
                      <a href="https://www.facebook.com/rdarmodels/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b5998] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Facebook">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
                      </a>
                      <a href="https://x.com/rdmodels" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00aced] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="https://www.instagram.com/rd.models" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e4405f] text-white hover:bg-[#FFB16E] hover:text-white transition" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
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
                <div key={idx} className="bg-white rounded-lg shadow p-6 flex gap-6 items-start">
                  <div className="flex flex-col items-center min-w-[100px]">
                    <h4 className="text-lg font-extrabold text-primary font-forum mb-2">{loc.name}</h4>
                    <motion.div
                      whileHover={{boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="rounded-full overflow-hidden shadow-md w-[100px] h-[100px]"
                    >
                      <Image
                        src={loc.iconicImage}
                        alt={`Iconic place in ${loc.name}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1 h-full text-muted-foreground font-barlow  rounded-lg align-middle flex flex-col justify-center">
                    {loc.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < loc.address.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="FAQs" className="py-16 md:py-24 bg-white">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about our services"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Video on the Left */}
              <div className="w-full">
                <video
                  src="https://res.cloudinary.com/dp8l2hrt1/video/upload/v1750482594/FAQs_Video_yajtpp.mp4"
                  loop
                  muted
                  autoPlay
                  className="w-full h-[360px] object-contain rounded-xl"
                />
              </div>
              {/* FAQs on the Right */}
              <div className="w-full">
                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-primary font-forum">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground font-barlow">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}