import { AnimatedButton } from "./animated-button";
import Link from "next/link";

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
        <div className="md:w-2/3 text-center md:text-left md:ml-16 md:pl-32"> {/* Added md:ml-8 for rightward shift */}
          <h2 className="text-3xl font-bold mb-6 font-forum text-gray-800">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8 font-barlow">
            Contact our Jaipur team today to discuss your 3D modeling requirements. We serve clients across India with
            world-class architectural visualization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <AnimatedButton
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white border-gray-800"
            >
              <Link href="/contact">Get a Quote</Link>
            </AnimatedButton>
            <AnimatedButton
              variant="outline"
              className="bg-transparent border-gray-800 text-gray-800 hover:bg-gray-100"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}