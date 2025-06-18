import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function FontsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-primary font-forum">
            RD Models
          </Link>
          <Button
            variant="default"
            size="sm"
            className="mb-6 rounded-full px-6 py-2 text-primary bg-transparent hover:bg-gray-100"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4 font-forum">
            Font Comparison
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-barlow">
            Compare different font options to determine which is most suitable
            for the RD Models website.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Forum Font */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-forum">
                Forum (Current Primary Font)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-forum">
                  Heading Example
                </h2>
                <h3 className="text-2xl font-bold text-primary font-forum">
                  Subheading Example
                </h3>
                <h4 className="text-xl font-bold text-primary font-forum">
                  Section Title Example
                </h4>
                <p className="text-lg font-forum">
                  This is an example of Forum font in a paragraph. Forum is an
                  elegant serif font with classical proportions, making it
                  suitable for headings and display text. It has a timeless
                  quality that works well for architectural and design-focused
                  brands.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 font-forum">Alphabet</h5>
                  <p className="font-forum">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-forum">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-forum">1234567890</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 font-forum">Characteristics</h5>
                  <ul className="list-disc list-inside space-y-1 font-barlow">
                    <li>Elegant serif font</li>
                    <li>Classical proportions</li>
                    <li>Good for headings and display text</li>
                    <li>Timeless and sophisticated</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jost Font */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-jost">
                Jost (Alternative Sans-Serif)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-jost">
                  Heading Example
                </h2>
                <h3 className="text-2xl font-bold text-primary font-jost">
                  Subheading Example
                </h3>
                <h4 className="text-xl font-bold text-primary font-jost">
                  Section Title Example
                </h4>
                <p className="text-lg font-jost">
                  This is an example of Jost font in a paragraph. Jost is a
                  geometric sans-serif typeface inspired by German geometric
                  sans-serifs. It's modern, clean, and versatile, making it
                  suitable for both headings and body text in contemporary
                  designs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 font-jost">Alphabet</h5>
                  <p className="font-jost">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-jost">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-jost">1234567890</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 font-jost">Characteristics</h5>
                  <ul className="list-disc list-inside space-y-1 font-barlow">
                    <li>Geometric sans-serif</li>
                    <li>Modern and clean</li>
                    <li>Versatile for headings and body text</li>
                    <li>Good readability at various sizes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Outfit Font */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-outfit">
                Outfit (Modern Sans-Serif)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-outfit">
                  Heading Example
                </h2>
                <h3 className="text-2xl font-bold text-primary font-outfit">
                  Subheading Example
                </h3>
                <h4 className="text-xl font-bold text-primary font-outfit">
                  Section Title Example
                </h4>
                <p className="text-lg font-outfit">
                  This is an example of Outfit font in a paragraph. Outfit is a
                  modern, versatile sans-serif with clean lines and balanced
                  proportions. It's highly readable and works well across
                  digital interfaces, making it an excellent choice for
                  contemporary websites.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 font-outfit">Alphabet</h5>
                  <p className="font-outfit">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-outfit">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-outfit">1234567890</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 font-outfit">
                    Characteristics
                  </h5>
                  <ul className="list-disc list-inside space-y-1 font-barlow">
                    <li>Modern sans-serif</li>
                    <li>Clean lines and balanced proportions</li>
                    <li>Excellent readability</li>
                    <li>Works well for digital interfaces</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amiri Font */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-amiri">
                Amiri (Classical Serif)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-amiri">
                  Heading Example
                </h2>
                <h3 className="text-2xl font-bold text-primary font-amiri">
                  Subheading Example
                </h3>
                <h4 className="text-xl font-bold text-primary font-amiri">
                  Section Title Example
                </h4>
                <p className="text-lg font-amiri">
                  This is an example of Amiri font in a paragraph. Amiri is a
                  classical serif typeface with traditional calligraphic forms.
                  It has an elegant, traditional feel that can add
                  sophistication and a sense of heritage to designs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 font-amiri">Alphabet</h5>
                  <p className="font-amiri">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-amiri">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-amiri">1234567890</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 font-amiri">Characteristics</h5>
                  <ul className="list-disc list-inside space-y-1 font-barlow">
                    <li>Classical serif typeface</li>
                    <li>Traditional calligraphic forms</li>
                    <li>Elegant and sophisticated</li>
                    <li>Adds a sense of heritage and tradition</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Barlow Font (Current Body Font) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-barlow">
                Barlow (Current Body Font)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary font-barlow">
                  Heading Example
                </h2>
                <h3 className="text-2xl font-bold text-primary font-barlow">
                  Subheading Example
                </h3>
                <h4 className="text-xl font-bold text-primary font-barlow">
                  Section Title Example
                </h4>
                <p className="text-lg font-barlow">
                  This is an example of Barlow font in a paragraph. Barlow is a
                  slightly rounded, low-contrast, grotesk-style sans-serif. It's
                  highly readable and versatile, making it an excellent choice
                  for body text and UI elements. The font maintains good
                  legibility even at small sizes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold mb-2 font-barlow">Alphabet</h5>
                  <p className="font-barlow">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="font-barlow">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="font-barlow">1234567890</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2 font-barlow">
                    Characteristics
                  </h5>
                  <ul className="list-disc list-inside space-y-1 font-barlow">
                    <li>Slightly rounded grotesk-style sans-serif</li>
                    <li>Low contrast and highly readable</li>
                    <li>Versatile for body text and UI elements</li>
                    <li>Good legibility at small sizes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Combinations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-forum">
                Recommended Font Combinations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 font-forum">
                  Current Combination: Forum + Barlow
                </h3>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary mb-3 font-forum">
                    Heading in Forum
                  </h4>
                  <p className="font-barlow">
                    Body text in Barlow. This combination pairs the elegant,
                    classical Forum serif for headings with the clean, readable
                    Barlow sans-serif for body text. This creates a nice
                    contrast while maintaining readability and sophistication.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-jost">
                  Alternative 1: Jost + Barlow
                </h3>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary mb-3 font-jost">
                    Heading in Jost
                  </h4>
                  <p className="font-barlow">
                    Body text in Barlow. This combination offers a more modern,
                    geometric approach with Jost for headings while maintaining
                    the familiar Barlow for body text. This creates a
                    contemporary feel that's still highly readable.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-outfit">
                  Alternative 2: Outfit + Barlow
                </h3>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary mb-3 font-outfit">
                    Heading in Outfit
                  </h4>
                  <p className="font-barlow">
                    Body text in Barlow. This combination uses the modern, clean
                    Outfit for headings with Barlow for body text. This creates
                    a contemporary, minimalist aesthetic that works well for
                    digital-first brands.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 font-amiri">
                  Alternative 3: Amiri + Barlow
                </h3>
                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary mb-3 font-amiri">
                    Heading in Amiri
                  </h4>
                  <p className="font-barlow">
                    Body text in Barlow. This combination pairs the classical,
                    elegant Amiri serif for headings with the modern Barlow for
                    body text. This creates a traditional yet accessible feel
                    that can convey heritage and expertise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
