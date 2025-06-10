'use client'; // if you're on app dir

import React from 'react';
import { motion } from 'framer-motion';

const InstagramPost = () => {
  const [duration, setDuration] = React.useState(40);

  React.useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setDuration(20); // Faster scroll on mobile
      } else {
        setDuration(40); // Default for desktop
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const instagramPosts = [
    'https://www.instagram.com/reel/C5azwDGB9I_/embed',
    'https://www.instagram.com/reel/DCGVgoehqbm/embed',
    'https://www.instagram.com/reel/C5AyRzELMlP/embed',
    'https://www.instagram.com/reel/C5x2YWshIag/embed',
    'https://www.instagram.com/reel/C52feQsL47v/embed',
    'https://www.instagram.com/reel/CrGT0ophME7/embed',
    'https://www.instagram.com/reel/CacpbPghQo5/embed',
    // Add more embed URLs here
  ];

  // Duplicate posts for seamless animation
  const allPosts = [...instagramPosts, ...instagramPosts];

  return (
    <div className="overflow-hidden w-full relative py-2">
      <motion.div
        className="flex whitespace-nowrap gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: duration, // Responsive scroll speed
            ease: "linear",
          },
        }}
      >
        {allPosts.map((post, index) => (
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
      </motion.div>
    </div>
  );
};

export default InstagramPost;
