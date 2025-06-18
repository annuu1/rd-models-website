import Link from "next/link";
import Image from "next/image";
import { Building2, ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import type { Metadata } from "next";
import { AnimatedHeader } from "@/components/animated-header";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Sometimes Rome Is Built in a Day—Or Less",
    content: `
      <p>Walk into any architecture studio or design office and you'll likely spot a physical model sitting quietly in a corner. To most, it looks like a simple object—a miniature version of a building, perhaps made of cardboard, foam, or acrylic. But to those who understand what goes into making one, that object is the result of hours, often days, of intense, hands-on work. At RD Models, we believe it's time to recognise architectural model making for what it truly is: an art form. And model makers? We're artists—with a precision knife in one hand and a deadline in the other.</p>
      
      <h2>The Work Behind the "Wow"</h2>
      
      <p>Architectural models are often admired for their clean finishes and exact proportions. But what's rarely seen is the process behind them. Creating a model requires more than just assembling parts—it takes problem-solving, spatial understanding, and a sharp eye for detail. Every wall, window, and roof must be cut, shaped, and assembled by hand. And that's just the beginning.</p>
      
      <p>What makes model making particularly demanding is the level of accuracy required. One wrong measurement—just a fraction off—and the entire structure could lose its balance or look misaligned. You can't fudge details here. Precision isn't a nice-to-have; it's essential.</p>
      
      <p>This precision, combined with the repetitive nature of the work, means the job requires a high degree of patience. Many people are surprised to learn how long even a relatively simple model can take. A week-long timeline is common. For larger or more complex models, we're talking several weeks of full-time work.</p>
      
      <h2>The Physical and Mental Effort</h2>
      
      <p>Model making may not seem physically demanding from the outside, but spend a few hours bent over a table cutting foam board or wood, and the strain adds up. Most model makers experience the toll—aching shoulders, strained eyes, small cuts from blades, and the occasional burn from hot glue. The work demands focus and steady hands, often for long stretches of time. And when deadlines are looming, it's not uncommon to find us working late into the night.</p>
      
      <p>Mentally, it's just as intense. Each project involves constant decision-making: What materials should be used? How can we keep the model light but durable? Will this section hold up during transport? The level of concentration required is high, and the margin for error is low.</p>
      
      <h2>The Reality of Cost and Materials</h2>
      
      <p>Then there's the financial side of things. Good models need good materials—wood, MDF boards, acrylic sheets, high-quality adhesives, precision tools, and sometimes specialized machines like laser cutters. These aren't cheap. And because every model is custom-built, there's little room for bulk discounts or reusability. You're building from scratch each time.</p>
      
      <p>At RD Models, we've invested in the best tools and materials so that every project meets our quality standards. But make no mistake—each model comes with significant material costs, in addition to the labor and time.</p>
      
      <h2>Models Are Fragile—But Also Powerful</h2>
      
      <p>Even with all the care taken in construction, architectural models are inherently delicate. They can be damaged during transport, handling, or even by a sudden shift in humidity. A corner might dent. A thin column might snap. We've seen models survive plane rides across continents—and others crack just a few feet away from the final presentation table.</p>
      
      <p>Still, models remain a powerful tool for architects and designers. No digital render, no matter how advanced, can match the immediate impact of a physical model. It lets clients and stakeholders engage with a project in a direct, tactile way. It's not just about how the building will look—it's about how it feels in space, how the parts relate to each other, how light falls and shadows form.</p>
      
      <p>That's why, despite all the challenges, model making continues to be a core part of architectural practice.</p>
      
      <h2>The Artist Behind the Craft</h2>
      
      <p>At RD Models, we don't just see ourselves as technicians—we see ourselves as artists. Our work is not simply about cutting and glueing materials together. It's about interpreting a design vision and turning it into a physical reality. We use our hands and eyes just as much as any sculptor or painter. The difference? Our canvas is scaled down, our materials industrial, and our timelines tight.</p>
      
      <p>Every member of our team brings a blend of technical skill and creative thinking. We troubleshoot on the fly, make dozens of micro-decisions, and constantly refine our approach with every project. Over time, we've built an internal language of form, proportion, and assembly—quiet knowledge that only comes with practice.</p>
      
      <p>Our work might not hang in galleries, but it plays a key role in the development of real-world spaces. Whether it's a detailed residential complex, a commercial project, or a masterplan for an urban district, the model serves as a bridge between concept and reality. And that makes our work not only relevant, but essential.</p>
      
      <h2>Why It Matters</h2>
      
      <p>In a fast-moving industry where digital tools dominate, architectural models offer a kind of clarity that's hard to replicate. They make abstract ideas tangible. They slow people down, invite questions, and spark conversations. They bring teams together around a shared vision.</p>
      
      <p>But more than anything, models show that someone cared enough to build something by hand.</p>
      
      <p>At RD Models, we take that responsibility seriously. We know that every project we touch becomes part of a larger journey—whether it's a competition entry, a pitch for investment, or the first public unveiling of a new vision. And we build accordingly.</p>
      
      <p>Because when you spend your days cutting, shaping, and assembling the ideas of others, you start to realise: model making isn't just part of architecture.</p>
      
      <p>It is architecture. Just on a different scale.</p>
    `,
    date: "May 15, 2025",
    author: "Urvashi",
    authorTitle: "Architectural Model Maker",
    authorImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-289347-1130626.jpg&fm=jpg",
    image: "https://zzbsgmn7m1siorzp.public.blob.vercel-storage.com/blog/blog_1.jpg",
    slug: "sometimes-rome-is-built-in-a-day",
    category: "Craftsmanship",
    tags: ["Architectural Models", "Craftsmanship", "Art", "Model Making", "Architecture"],
    excerpt:
      "Walk into any architecture studio and you'll likely spot a physical model sitting quietly in a corner. At RD Models, we believe it's time to recognise architectural model making for what it truly is: an art form.",
  },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - RD Models",
      description: "The blog post you're looking for could not be found.",
    };
  }

  return {
    title: `${post.title} - RD Models Blog`,
    description: post.excerpt || "",
    keywords: post.tags.join(", "),
    openGraph: {
      title: `${post.title} - RD Models Blog`,
      description: post.excerpt || "",
      url: `https://rdmodels.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - RD Models Blog`,
      description: post.excerpt || "",
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post that matches the slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // If no post is found, you could redirect or show an error
  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedHeader />

      <main className="container py-12">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-forum">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-barlow">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-barlow">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span className="font-barlow">{post.category}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <div
            className="prose prose-lg prose-neutral max-w-none font-barlow [&>h2]:font-forum [&>h2]:text-primary [&>p]:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-b py-8 my-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold font-forum">{post.author}</h3>
                <p className="text-muted-foreground font-barlow">{post.authorTitle}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <h3 className="text-lg font-bold mr-2 font-forum">Tags:</h3>
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground font-barlow">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}