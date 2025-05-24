"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-medium text-primary mb-4 font-barlow tracking-wider uppercase">
            An Architect who chose hobby as a profession &amp; decided to set new benchmark in model making.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/images/founder-section.png"
                alt="Ar. Rohitash Daiya - Founder RD Models"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-gray-900 font-forum leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Leading Model Maker in India
            </motion.h3>

            <motion.p
              className="text-lg text-gray-700 font-barlow leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              RD Models, a premier model maker, specializes in creating detailed and precise models for various
              industries, including real estate, railways, machinery, factories, and defense. Our dedication to quality
              and innovation sets us apart in the model maker industry. We embrace challenging projects, utilizing
              advanced technology and extensive experience to produce functional and aesthetically pleasing models. As a
              top model maker, we deliver high-quality models tailored to meet the specific needs of our clients across
              diverse sectors, including scientific research.
            </motion.p>

            <motion.div
              className="flex items-center justify-between pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-xl font-bold text-gray-900 font-forum">Ar. Rohitash Daiya</h4>
                <p className="text-gray-600 font-barlow">Founder R D Models</p>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon({ className: "h-5 w-5" })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
