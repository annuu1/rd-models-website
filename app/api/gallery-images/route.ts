import { NextResponse } from 'next/server';
import { galleryImages } from '@/data/galleryImages';
import clientPromise from '@/lib/mongodb';

interface GalleryImage {
  _id: {
    $oid: string;
  };
  title: string;
  category: string;
  description: string;
  images: Array<{
    url: string;
    publicId: string;
    order: number;
    _id: {
      $oid: string;
    };
  }>;
  status: string;
  featured: boolean;
  tags: string[];
  viewCount: number;
  createdBy: {
    $oid: string;
  };
  updatedBy: {
    $oid: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface TransformedGalleryImage {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Try to fetch from MongoDB
    const mongoImages = await db.collection<GalleryImage>('galleries')
      .find({ status: 'published' }) // Only fetch published galleries
      .toArray();
    
    if (mongoImages && mongoImages.length > 0) {
      // Transform MongoDB data to match the expected frontend format
      const transformedImages: TransformedGalleryImage[] = mongoImages.map((item, index) => ({
        id: item._id.$oid,
        title: item.title,
        category: item.category,
        description: item.description,
        images: item.images
          .sort((a, b) => a.order - b.order) // Sort images by order
          .map(img => img.url) // Extract just the URLs
      }));

      //return the gallery images with transformed images
      return NextResponse.json(galleryImages.concat(transformedImages));
    }
    
    // Fall back to local data if MongoDB is empty
    return NextResponse.json(galleryImages);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    // Fall back to local data in case of any error
    return NextResponse.json(galleryImages);
  }
}
