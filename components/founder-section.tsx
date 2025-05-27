"use client"

import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 p-8 sm:p-0 bg-white relative" style={{
        position: 'relative',
        zIndex: 1
      }}>
        <div className="absolute ml-64 inset-0 border-2 border-primary z-0 hidden sm:block"></div>
        {/* Image floated left and overlapping border */}
        <div className="relative flex-shrink-0 z-20">
          <div className=" relative">
            <Image
              src="/images/founder.png"
              alt="Ar. Rohitash Daiya - Founder RD Models"
              width={800}
              height={500}
              priority
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-6 max-w-[550px]">
          <h2 className="text-4xl md:text-2xl font-bold text-primary font-grenda leading-tight lg:border-b-2 lg:border-primary pb-2">
          An Architect who chose hobby as a profession & decide to set new benchmark in model making.
          </h2>
          <p className="text-base text-gray-700 font-forum leading-relaxed">
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