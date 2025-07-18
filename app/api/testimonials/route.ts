import { NextResponse } from 'next/server';
import { testimonials } from '@/data/testimonials';
import clientPromise from '@/lib/mongodb';

interface Testimonials {
  _id: {
    $oid: string;
  };
  quote: string;
  author: string[];
  position: string;
  avatar: {
    url: string;
    publicId: string;
  };
}

export async function GET() {
      try {
    const client = await clientPromise;
    const db = client.db();
    
    // Fetch active locations from MongoDB, sorted by order
    const mongoTestimonials = await db.collection<Testimonials>('testimonials')
      .find({ status: 'published' })
      .sort({ order: 1, createdAt: -1 })
      .toArray();
    
    if (mongoTestimonials && mongoTestimonials.length > 0) {
      // Transform MongoDB data to match the expected frontend format
      const transformedTestimonials = mongoTestimonials.map((testimonial) => ({
        quote: testimonial.quote,
        author: testimonial.author,
        position: testimonial.position, // Assuming iconicImage is a URL string
        avatar: testimonial.avatar.url,
      }));

      return NextResponse.json(transformedTestimonials);
    }
    
    // Return empty array if no locations found
    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}