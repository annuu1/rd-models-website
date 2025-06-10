"use client"

import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { motion } from "framer-motion"

export function FounderSection() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 p-8 sm:p-0 bg-white relative" style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div className="absolute ml-64 mr-20 inset-0 border-2 border-primary z-0 hidden sm:block"></div>
        {/* Image floated left and overlapping border */}
        <div className="relative flex-shrink-0 z-20">
          <div className=" relative">
            <Image
              src="/images/founder.png"
              alt="Ar. Rohitash Daiya - Founder RD Models"
              width={1000}
              height={700}
              priority
              className="w-[300px] h-[220px] sm:w-[400px] sm:h-[320px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[480px] object-contain"
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6 max-w-[550px] p-6">
          <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-grenda leading-tight">
            An Architect who chose hobby as a profession & decide to set new benchmark in model making.
            <motion.span
              className="block absolute left-0 -bottom-2 h-1 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ height: 4 }}
            />
          </h2>
          <p className="text-lg text-gray-700 font-forum leading-relaxed">
            RD Models, a premier model maker, specializes in creating detailed and precise models for various industries, including real estate, railways, machinery, factories, and defense. Our dedication to quality and innovation sets us apart in the model maker industry. We embrace challenging projects, utilizing advanced technology and extensive experience to produce functional and aesthetically pleasing models. As a top model maker, we deliver high-quality models tailored to meet the specific needs of our clients across diverse sectors, including scientific research.
          </p>
          <div className="mt-4">
            <div className="text-xl font-bold text-gray-900 font-forum">Ar. Rohitash Daiya</div>
            <div className="text-gray-600 font-forum">Founder R D Models</div>
          </div>
        </div>
      </div>
    </section>
  )
}