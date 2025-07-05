import { NextResponse } from 'next/server';
import { videos } from '@/data/galleryVideos';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Try to fetch from MongoDB
    const mongoVideos = await db.collection('videos')
      .find({ status: 'published' })
      .toArray();
    
    if (mongoVideos && mongoVideos.length > 0) {
      // Transform MongoDB data to match the expected frontend format
      const transformedVideos = mongoVideos.map((item, index) => ({
        id: typeof item._id === 'number' ? item._id : index + videos.length, // fallback to unique number
        title: item.title,
        category: item.category,
        description: item.description,
        thumbnail: item.thumbnail || "",
        videoUrl: item.videoUrl,
        duration: item.duration || "0:00",
      }));

      //return the gallery images with transformed images
      return NextResponse.json(videos.concat(transformedVideos));
    }
    
    // Fall back to local data if MongoDB is empty
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    // Fall back to local data in case of any error
    return NextResponse.json(videos);
  }
}
