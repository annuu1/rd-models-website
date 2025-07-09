import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

interface Location {
  _id: {
    $oid: string;
  };
  name: string;
  address: string[];
  iconicImage: {
    url: string;
    publicId: string;
  };
  city: string;
  state: string;
  country: string;
  pincode?: string;
  phone?: string;
  email?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  isHeadOffice: boolean;
  status: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Fetch active locations from MongoDB, sorted by order
    const mongoLocations = await db.collection<Location>('locations')
      .find({ status: 'active' })
      .sort({ order: 1, createdAt: -1 })
      .toArray();
    
    if (mongoLocations && mongoLocations.length > 0) {
      // Transform MongoDB data to match the expected frontend format
      const transformedLocations = mongoLocations.map((location) => ({
        name: location.name,
        address: location.address,
        iconicImage: location.iconicImage.url,
        city: location.city,
        state: location.state,
        country: location.country,
        pincode: location.pincode,
        phone: location.phone,
        email: location.email,
        coordinates: location.coordinates,
        isHeadOffice: location.isHeadOffice
      }));

      return NextResponse.json(transformedLocations);
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