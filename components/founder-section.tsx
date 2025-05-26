"use client"

import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className=" w-full flex flex-col md:flex-row items-center gap-12 p-8 shadow-xl border-2 border-primary bg-gray-200 relative">
        {/* Image floated left and overlapping border */}
        <div className="relative flex-shrink-0 md:-ml-5 z-20">
          <div className=" relative">
            <Image
              src="/images/hero-bg.jpg"
              alt="Ar. Rohitash Daiya - Founder RD Models"
              width={500}
              height={240}
              className="shadow-lg -ml-8 md:-ml-16"
              priority
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-forum leading-tight border-b-2 border-primary pb-2">
            Leading Model Maker in India
          </h2>
          <p className="text-lg text-gray-700 font-barlow leading-relaxed">
            RD Models, a premier model maker, specializes in creating detailed and precise models for various industries, including real estate, railways, machinery, factories, and defense. Our dedication to quality and innovation sets us apart in the model maker industry. We embrace challenging projects, utilizing advanced technology and extensive experience to produce functional and aesthetically pleasing models. As a top model maker, we deliver high-quality models tailored to meet the specific needs of our clients across diverse sectors, including scientific research.
          </p>
          <div className="mt-4">
            <div className="text-xl font-bold text-gray-900 font-forum">Ar. Rohitash Daiya</div>
            <div className="text-gray-600 font-barlow">Founder R D Models</div>
          </div>
        </div>
      </div>
    </section>
  )
}