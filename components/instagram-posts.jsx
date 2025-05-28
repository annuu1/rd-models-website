'use client'; // if you're on app dir

import React from 'react';

const InstagramPost = () => {
  const instagramPosts = [
    'https://www.instagram.com/reel/C5AyRzELMlP/embed',
    'https://www.instagram.com/reel/C5AyRzELMlP/embed',
    'https://www.instagram.com/reel/C5AyRzELMlP/embed',
    // Add more embed URLs here
  ];

  return (
    <div className="overflow-x-auto w-full relative py-2">
      <div className="flex animate-scroll whitespace-nowrap gap-4">
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
            style={{ width: 'min(350px, 90vw)' }}
          >
            <iframe
              src={post}
              frameBorder="0"
              allowFullScreen
              className="instagram-iframe rounded-lg"
              style={{ width: '100%', minHeight: 0, height: '500px', maxHeight: '80vh', border: 0, background: '#fff' }}
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </div>
    </div>

  );
};

export default InstagramPost;
