import { NextResponse } from 'next/server';
import { galleryImages } from '@/data/galleryImages';

export async function GET() {
  return NextResponse.json(galleryImages);
}
