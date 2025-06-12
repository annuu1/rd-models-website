import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string;

    if (!file || !folder) {
      return NextResponse.json({ error: 'Missing file or folder' }, { status: 400 });
    }

    const filename = `${folder}/${Date.now()}-${file.name}`;

    const blob = await put(filename, file.stream(), {
      access: 'public',
      contentType: file.type,
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Blob upload error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
