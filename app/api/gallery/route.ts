import { NextResponse } from 'next/server';
import { galleryImages, type GalleryImage } from '@/data/galleryImages';

export async function POST(request: Request) {
  try {
    const { title, category, description, images } = await request.json();

    if (!title || !category || !images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields or images' },
        { status: 400 }
      );
    }

    // Check if gallery item exists
    const existingItemIndex = galleryImages.findIndex(
      (item) => item.title === title && item.category === category
    );

    if (existingItemIndex !== -1) {
      // Update existing item
      galleryImages[existingItemIndex].images.push(...images);
      if (description) {
        galleryImages[existingItemIndex].description = description;
      }
    } else {
      // Add new item
      const newId = galleryImages.length > 0 ? Math.max(...galleryImages.map((item) => item.id)) + 1 : 1;
      galleryImages.push({
        id: newId,
        title,
        category,
        description: description || `Showcase of ${title} in ${category}`,
        images,
      });
    }

    return NextResponse.json({ message: 'Gallery updated successfully', images }, { status: 200 });
  } catch (error) {
    console.error('Gallery update error:', error);
    return NextResponse.json({ error: 'Failed to update gallery' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(galleryImages);
}