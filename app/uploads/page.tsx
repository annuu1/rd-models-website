'use client';

import UploadForm from './UploadForm';

export default function UploadPage() {
  return (
    <div>
      <h1>Upload New Image</h1>
      <UploadForm folder="images" />
      <UploadForm folder="videos" />

    </div>
  );
}