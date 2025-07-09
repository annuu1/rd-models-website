import { NextResponse } from 'next/server';
import { publications } from '@/data/publications';

export async function GET() {
    return NextResponse.json(publications);
}