import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"
import { AnimatedHeader } from "@/components/animated-header"

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
  {
    id: 2,
    title: "The Future of Architectural Visualization",
    content: `
      <p>The field of architectural visualization is undergoing a profound transformation, driven by rapid advancements in technology and changing client expectations. As we look to the future, several emerging trends are set to redefine how architects, developers, and visualization specialists bring architectural concepts to life.</p>
      
      <h2>Virtual Reality (VR) and Immersive Experiences</h2>
      
      <p>Virtual Reality has moved beyond being a novelty to become an essential tool in architectural visualization. VR allows clients to step inside a building before a single brick is laid, experiencing spaces in a way that traditional renderings cannot match. The immersive nature of VR creates a deeper emotional connection to the design, helping clients make more informed decisions.</p>
      
      <p>As VR technology becomes more accessible and affordable, we're seeing a shift from occasional use to integration in standard workflow processes. Architects are now designing with VR in mind, considering how spaces will be experienced through this medium.</p>
      
      <h2>Augmented Reality (AR) for On-Site Visualization</h2>
      
      <p>While VR creates entirely virtual environments, Augmented Reality overlays digital information onto the physical world. This technology is particularly valuable for on-site visualization, allowing stakeholders to see proposed buildings in their actual context.</p>
      
      <p>Using AR applications on smartphones or tablets, clients can walk around a site and see how a new building will look from different angles, how it will cast shadows, and how it will interact with existing structures. This contextual understanding is invaluable for urban planning and development projects.</p>
      
      <h2>Real-Time Rendering and Interactive Presentations</h2>
      
      <p>The days of waiting hours for a single rendering to complete are fading. Real-time rendering engines, originally developed for the gaming industry, are now being adapted for architectural visualization. These tools allow for instantaneous visualization of changes, enabling more dynamic and interactive client presentations.</p>
      
      <p>Clients can request modifications during a presentation and see the results immediately, fostering a more collaborative design process. This interactivity is transforming client meetings from passive presentations to active co-creation sessions.</p>
      
      <h2>Artificial Intelligence and Automation</h2>
      
      <p>Artificial Intelligence is beginning to make its mark on architectural visualization through automation of repetitive tasks, intelligent scene population, and even design suggestion. AI algorithms can analyze vast libraries of design elements and suggest optimal layouts, materials, and lighting scenarios.</p>
      
      <p>This doesn't mean that human creativity is being replaced; rather, AI is handling the mundane aspects of visualization, freeing up artists to focus on the creative elements that require a human touch.</p>
      
      <h2>Photorealism vs. Stylized Visualization</h2>
      
      <p>While the pursuit of photorealism has long been a goal in architectural visualization, we're seeing a growing appreciation for stylized and artistic approaches. These non-photorealistic visualizations can often better communicate the essence and feeling of a space, rather than just its physical appearance.</p>
      
      <p>This trend reflects a broader understanding that different visualization styles serve different purposes. Photorealism may be ideal for marketing materials, while more abstract or stylized visualizations might better support the design development process.</p>
      
      <h2>Conclusion</h2>
      
      <p>The future of architectural visualization is not just about better graphics or faster rendering; it's about creating more meaningful and useful ways to communicate architectural ideas. As technology continues to evolve, the line between the virtual and physical worlds will blur, offering new possibilities for how we conceive, develop, and experience architecture.</p>
      
      <p>For visualization specialists and architectural firms, staying ahead of these trends isn't just about adopting new technologies—it's about understanding how these tools can enhance the design process and client experience. Those who can effectively integrate these emerging approaches will be well-positioned to lead in an increasingly competitive field.</p>
    `,
    date: "May 15, 2023",
    author: "Deeksha Vyas",
    authorTitle: "Chief Marketing Officer",
    authorImage:
      "https://rdmodels.com/wp-content/uploads/2025/01/Deeksha-pnxqvlmzw1pylhl7ivkogx2fwq65helnihpuu1atvc.png?height=100&width=100",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?height=600&width=1200",
    slug: "future-of-architectural-visualization",
    category: "Technology",
    tags: ["Virtual Reality", "Augmented Reality", "Real-time Rendering", "Artificial Intelligence"],
  },
  {
    id: 3,
    title: "3D Modeling Techniques for Realistic Interiors",
    content: `
      <p>Creating photorealistic interior visualizations requires a combination of technical skill, artistic sensibility, and attention to detail. In this article, we'll explore advanced techniques for achieving stunning interior renderings that captivate clients and effectively communicate design concepts.</p>
      
      <h2>Mastering Lighting for Interior Spaces</h2>
      
      <p>Lighting is perhaps the most critical element in creating realistic interior visualizations. Natural light, artificial light sources, and their interaction with materials all contribute to the mood and realism of a scene.</p>
      
      <p>For natural lighting, consider the time of day, geographic location, and orientation of the space. Study how sunlight enters through windows, creating patterns of light and shadow. Use HDRI (High Dynamic Range Imaging) environments to achieve realistic ambient lighting and reflections.</p>
      
      <p>For artificial lighting, pay attention to the color temperature, intensity, and distribution of different light fixtures. Modern rendering engines allow for physically accurate light simulation, including IES profiles that replicate real-world light fixtures.</p>
      
      <h2>Material Definition and Texturing</h2>
      
      <p>Convincing materials are essential for realistic interiors. Each material should have appropriate properties for its physical counterpart, including reflectivity, roughness, transparency, and surface detail.</p>
      
      <p>Use PBR (Physically Based Rendering) materials whenever possible, as they respond to light in a physically accurate way. For textures, high-resolution images are important, but proper mapping and scale are equally crucial. A wood texture, for example, should have the right grain size and pattern for the specific type of wood being represented.</p>
      
      <p>Don't forget about imperfections—slight variations in surface color, subtle scratches, fingerprints on glass, or dust in corners all contribute to realism by breaking up the perfection that immediately signals a computer-generated image.</p>
      
      <h2>Composition and Staging</h2>
      
      <p>Even with perfect lighting and materials, poor composition can undermine the impact of an interior visualization. Consider the principles of photography when setting up your scenes.</p>
      
      <p>Choose camera angles that showcase the space effectively, typically at eye level for a natural perspective. Use the rule of thirds to create balanced compositions, and consider leading lines to draw the viewer's eye through the space.</p>
      
      <p>Staging—the arrangement of furniture, accessories, and personal items—is what transforms a sterile architectural space into a lived-in environment. Include elements that suggest human presence: a draped throw on a sofa, books on a coffee table, or a half-filled glass of water. These details create narrative and scale, helping viewers connect emotionally with the space.</p>
      
      <h2>Post-Processing for Enhanced Realism</h2>
      
      <p>The rendering is just the beginning. Thoughtful post-processing can elevate a good rendering to an exceptional one. Adjust exposure, contrast, and color balance to create a cohesive look. Add subtle effects like depth of field to focus attention and create a photographic quality.</p>
      
      <p>Consider the mood you want to convey—warm and inviting, cool and sophisticated, bright and energetic—and adjust your post-processing accordingly. Reference interior photography to understand how professional photographers treat similar spaces.</p>
      
      <h2>Conclusion</h2>
      
      <p>Creating realistic interior visualizations is both an art and a science. By mastering lighting, materials, composition, and post-processing, you can create renderings that not only showcase architectural spaces accurately but also evoke emotional responses from viewers.</p>
      
      <p>Remember that the goal isn't just technical perfection—it's effective communication of design intent. Sometimes, a slightly stylized approach that emphasizes certain design elements can be more effective than strict photorealism. Always consider the purpose of your visualization and the story you want to tell about the space.</p>
    `,
    date: "April 28, 2023",
    author: "Pushpkant Yadav",
    authorTitle: "Chief Technology Officer",
    authorImage: "https://rdmodels.com/wp-content/uploads/2025/04/Pushpkant-ji-1-300x300.png?height=100&width=100",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?height=600&width=1200",
    slug: "3d-modeling-techniques-for-realistic-interiors",
    category: "Tutorials",
    tags: ["Interior Design", "Lighting", "Materials", "Composition"],
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found - RD Models",
      description: "The blog post you're looking for could not be found.",
    }
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
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post that matches the slug
  const post = blogPosts.find((p) => p.slug === params.slug)

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
    )
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
            className="prose prose-lg max-w-none font-barlow prose-headings:font-forum prose-headings:text-primary"
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
  )
}
