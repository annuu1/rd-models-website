import { NextResponse } from 'next/server';
import { blogData } from '@/data/blogs';

// Ensure blogData is typed as an array
import clientPromise from '@/lib/mongodb';

interface BlogPreview {
  _id: {
    $oid: string;
  };
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
}

interface Blog {
  id: {
    $oid: string;
  };
  title: string;
  content: string;
  date: string;
  author: string;
  authorTitle: string;
  authorImage: {
    url: string;
    publicId: string;
  };
  image: {
    url: string;
    publicId: string;
  };
  status: string;
  featured: boolean;
  readTime: number;
  viewCount: number;
  likes: number;
  metaTitle: string;
  excerpt: string;
  metaDescription: string;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const type = searchParams.get('type'); // 'preview' or 'full'

    const client = await clientPromise;
    const db = client.db();

    if (slug) {
  // Fetch single blog or preview by slug
  const mongoBlog = await db.collection('blogs')
    .findOne({ slug, status: 'published' });

  const localBlog = Array.isArray(blogData)
    ? blogData.find(blog => blog.slug === slug)
    : undefined;

  // If neither found, return 404
  if (!mongoBlog && !localBlog) {
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }

  // Use mongoBlog if found, otherwise fallback to localBlog
  const blog = mongoBlog || localBlog;

  if (type === 'preview') {
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    const preview: BlogPreview = {
      _id: { $oid: (mongoBlog ? mongoBlog._id.toString() : localBlog?._id?.$oid ?? '') },
      title: blog.title,
      excerpt: blog.excerpt,
      date: mongoBlog
        ? (mongoBlog.createdAt
            ? new Date(mongoBlog.createdAt.$date).toLocaleDateString()
            : new Date().toLocaleDateString())
        : (localBlog?.createdAt
            ? new Date(
                typeof localBlog.createdAt === 'string'
                  ? localBlog.createdAt
                  : localBlog.createdAt.$date
              ).toLocaleDateString()
            : new Date().toLocaleDateString()),
      author: blog.author,
      image: blog.image?.url || blog.image.url || '',
      slug: blog.slug,
      category: blog.category || 'uncategorized'
    };
    return NextResponse.json(preview);
  }

  // Return full blog
  if (mongoBlog) {
    const fullBlog: Blog = {
      id: { $oid: mongoBlog._id.toString() },
      title: mongoBlog.title,
      content: mongoBlog.content,
      date: mongoBlog.createdAt
        ? new Date(mongoBlog.createdAt.$date).toLocaleDateString()
        : new Date().toLocaleDateString(),
      author: mongoBlog.author,
      authorTitle: mongoBlog.authorTitle,
      authorImage: mongoBlog.authorImage,
      image: mongoBlog.image,
      status: mongoBlog.status,
      featured: mongoBlog.featured,
      readTime: mongoBlog.readTime,
      viewCount: mongoBlog.viewCount,
      likes: mongoBlog.likes,
      metaTitle: mongoBlog.metaTitle,
      excerpt: mongoBlog.excerpt,
      metaDescription: mongoBlog.metaDescription
    };
    return NextResponse.json(fullBlog);
  } else {
    // Fallback to localBlog
    return NextResponse.json(localBlog);
  }
}

    // Fetch all blogs or previews
    const mongoBlogs = await db.collection('blogs')
      .find({ status: 'published' })
      .toArray();

    if (mongoBlogs.length > 0) {
      if (type === 'preview') {
        const previews: BlogPreview[] = mongoBlogs.map(blog => ({
          _id: { $oid: blog._id.toString() },
          title: blog.title,
          excerpt: blog.excerpt,
          date: blog.createdAt 
            ? new Date(blog.createdAt.$date).toLocaleDateString() 
            : new Date().toLocaleDateString(),
          author: blog.author,
          image: blog.image?.url || '',
          slug: blog.slug,
          category: blog.category || 'uncategorized'
        }));
        return NextResponse.json(previews);
      }

      const fullBlogs: Blog[] = mongoBlogs.map(blog => ({
        id: { $oid: blog._id.toString() },
        title: blog.title,
        content: blog.content,
        date: blog.createdAt 
          ? new Date(blog.createdAt.$date).toLocaleDateString() 
          : new Date().toLocaleDateString(),
        author: blog.author,
        authorTitle: blog.authorTitle,
        authorImage: blog.authorImage,
        image: blog.image,
        status: blog.status,
        featured: blog.featured,
        readTime: blog.readTime,
        viewCount: blog.viewCount,
        likes: blog.likes,
        metaTitle: blog.metaTitle,
        excerpt: blog.excerpt,
        metaDescription: blog.metaDescription
      }));
      return NextResponse.json(fullBlogs);
    }

    // Fallback to local data
    if (type === 'preview') {
      const previews: BlogPreview[] = Array.isArray(blogData)
        ? blogData.map(blog => ({
            _id: blog._id,
            title: blog.title,
            excerpt: blog.excerpt,
            date: blog.createdAt
              ? new Date(
                  typeof blog.createdAt === 'string'
                    ? blog.createdAt
                    : blog.createdAt.$date
                ).toLocaleDateString()
              : new Date().toLocaleDateString(),
            author: blog.author,
            image: blog.image.url,
            slug: blog.slug,
            category: blog.category || 'uncategorized'
          }))
        : [];
      return NextResponse.json(previews);
    }
    return NextResponse.json(blogData);

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}