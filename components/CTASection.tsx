import { AnimatedButton } from "./animated-button";
import Link from "next/link";
import { SectionHeading } from "./section-heading";

export function CTASection() {
  return (
    <section className="py-16 bg-gray-0">
      <div className="container w-full md:justify-between flex flex-col md:flex-row items-center">
        {/* Image Container */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-full max-w-sm mx-auto">
            <img
              src="/images/cta/sketch.png"
              alt="Default Architectural Visualization"
              className="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-0"
            />
            <img
              src="/images/cta/project.png"
              alt="Hover Architectural Visualization"
              className="absolute top-0 left-0 w-full h-auto object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
        {/* Text and Buttons */}
        <div className="md:w-2/3 text-center md:text-left md:ml-16 md:pl-32 flex flex-col justify-center items-center"> {/* Added md:ml-8 for rightward shift */}
          <SectionHeading
            title="Let’s work together to build a model that speaks for your brand"
            subtitle="Contact our Jaipur team today to discuss your 3D modeling requirements. We serve clients across India with
            world-class architectural visualization services."
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <AnimatedButton
              variant="outline"
              className="bg-primary text-white hover:border-1 hover:border-primary hover:text-primary"
            >
              <Link href="/contact">Get a Quote</Link>
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-800 hover:bg-primary hover:text-white hover:border-transparent"
            >
              <Link href="/gallery/images">View Portfolio</Link>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}