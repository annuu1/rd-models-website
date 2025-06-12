'use client';

import { useState } from 'react';

export default function UploadForm({ folder }: { folder: 'images' | 'videos' }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const res = await fetch('/api/blob/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUploadedUrl(data.url);
  };

  return (
    <div>
      <input
        type="file"
        accept={folder === 'images' ? 'image/*' : 'video/*'}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload to {folder}</button>

      {uploadedUrl && (
        folder === 'images' ? (
          <img src={uploadedUrl} alt="uploaded" className="mt-4 max-w-md" />
        ) : (
          <video src={uploadedUrl} controls className="mt-4 max-w-md" />
        )
      )}
    </div>
  );
}
