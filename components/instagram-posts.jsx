'use client'; // if you're on app dir

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    'https://www.instagram.com/reel/C5AyRzELMlP/embed',
    'https://www.instagram.com/reel/C5x2YWshIag/embed',
  ];

  // Settings for react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: typeof window !== 'undefined' && window.innerWidth <= 768 ? 2000 : 3500,
    cssEase: 'linear',
    swipeToSlide: true,
    draggable: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="overflow-hidden w-full relative py-2">
      <Slider {...settings}>
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105 px-2"
            style={{ width: 350, maxWidth: '90vw' }}
          >
            <iframe
              src={post}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Instagram post"
              className="instagram-iframe rounded-lg"
              style={{ width: '100%', minHeight: 0, height: '500px', maxHeight: '80vh', border: 0, background: '#fff' }}
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramPost;
