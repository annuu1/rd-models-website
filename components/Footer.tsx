import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-24">
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs font-barlow mb-4">
              Leading 3D architectural modeling company based in Jaipur, Rajasthan, serving clients across India with
              detailed building models and visualizations.
            </p>
            <div className="text-sm text-muted-foreground font-barlow">
              <p>📍 Jaipur, Rajasthan, India</p>
              <p>🇮🇳 Serving all of India</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 font-forum">Quick Links</h3>
            <ul className="space-y-2 font-barlow">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 font-forum">Services</h3>
            <ul className="space-y-2 font-barlow">
              <li>
                <span className="text-muted-foreground">3D Architectural Models</span>
              </li>
              <li>
                <span className="text-muted-foreground">Interior Visualization</span>
              </li>
              {/* Add more services as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
