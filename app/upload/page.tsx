'use client';

import { useState, useEffect } from 'react';
import { CldUploadButton, type CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { Copy, Upload } from 'lucide-react';

export default function UploadPage() {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('Miscellaneous');
  const [description, setDescription] = useState<string>('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [folderPath, setFolderPath] = useState<string>('rdmod/gallery');

  const categories = [
    'Miscellaneous',
    'Commercial Models',
    'High Rise Residential',
    'Landscape + Resort',
    'Villa Unit Models',
    'Interior Units',
    'House Models',
    'Low Rise Residential',
    'Villa Township',
    'Institutional Models',
    'Industrial / Factory Models',
    'Healthcare Hospital Models',
    'Monochromatic Models',
    'Water supply Models',
    'Residential Township',
    'Industrial Township',
    'Art Models',
    'Sectional Models',
    'Monuments',
  ];

  // Sanitize folder names to ensure valid Cloudinary folder paths
  const sanitizeFolderName = (str: string) => {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9-]/g, '-') // Replace invalid characters with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .toLowerCase();
  };

  // Update folder path when title or category changes
  useEffect(() => {
    if (title.trim() && category) {
      const sanitizedCategory = sanitizeFolderName(category);
      const sanitizedTitle = sanitizeFolderName(title);
      const newFolderPath = `rdmod/gallery/${sanitizedCategory}/${sanitizedTitle}`;
      setFolderPath(newFolderPath);
      console.log('Updated folder path:', newFolderPath); // Debug folder path
    } else {
      setFolderPath('rdmod/gallery');
    }
  }, [title, category]);

  const handleUploadSuccess = async (results: CloudinaryUploadWidgetResults) => {
    if (results.event === 'success' && results.info && typeof results.info !== 'string') {
      const newImageUrl = results.info.secure_url;
      console.log('Uploaded to folder:', folderPath, 'URL:', newImageUrl); // Debug upload
      setUploadedImages((prev) => [...prev, newImageUrl]);
    } else {
      setUploadError('Failed to upload image');
      console.error('Upload failed:', results);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !category || uploadedImages.length === 0) {
      setUploadError('Please provide title, category, and at least one image');
      return;
    }

    try {
      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, category, description, images: uploadedImages }),
      });

      const result = await response.json();
      if (response.ok) {
        setUploadError(null);
        setTitle('');
        setDescription('');
        setUploadedImages([]);
      } else {
        setUploadError(result.error || 'Failed to update gallery');
      }
    } catch (error) {
      setUploadError('Failed to update gallery: Network error');
      console.error('Gallery update error:', error);
    }
  };

  const handleCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(url);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      setUploadError('Failed to copy URL');
      console.error('Failed to copy URL:', err);
    }
  };

  // Disable upload button if title or category is missing
  const isUploadDisabled = !title.trim() || !category;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Upload Media to Gallery</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter project title (e.g., KAAR, Dubai)"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Images
            </label>
            <CldUploadButton
              key={folderPath} // Force re-render when folderPath changes
              className={`w-full py-2 rounded-md text-sm font-medium flex items-center justify-center transition ${
                isUploadDisabled
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              onSuccess={handleUploadSuccess}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
              options={{
                folder: folderPath,
                resource_type: 'image',
                multiple: true,
              }}
              disabled={isUploadDisabled}
            >
              <Upload className="w-5 h-5 mr-1" />
              Upload Images
            </CldUploadButton>
            {isUploadDisabled && (
              <p className="text-red-500 text-sm mt-2">
                Please provide both title and category before uploading
              </p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              Images will be uploaded to: {folderPath}
            </p>
          </div>
          {uploadError && (
            <p className="text-red-500 text-sm mb-4">{uploadError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-sm font-medium"
          >
            Save to Gallery
          </button>
        </form>
      </div>
      {uploadedImages.length > 0 && (
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Images</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              {uploadedImages.map((url, index) => (
                <div key={index} className="flex flex-col">
                  <img src={url} alt={`Uploaded ${index + 1}`} className="w-full rounded-md mb-2" />
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={url}
                      readOnly
                      className="flex-1 px-3 py-2 border rounded-l-md text-sm bg-gray-50"
                    />
                    <button
                      onClick={() => handleCopyUrl(url)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition flex items-center"
                    >
                      <Copy className="w-5 h-5 mr-1" />
                      {copySuccess === url ? 'Copied!' : 'Copy URL'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}