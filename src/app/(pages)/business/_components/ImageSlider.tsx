'use client';

import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/business/blog.png',
      title: 'coding_cheff',
    },
    {
      id: 4,
      image: '/business/blog.png',
    },
    {
      id: 5,
      image: '/business/news.png',
    },
    {
      id: 6,
      image: '/business/Ecommerce.png',
    }
  ];

  const getSlidePosition = (index: number) => {
    const position = (index - currentSlide + slides.length) % slides.length;
    
    if (position === 0) return 'translate-x-0 z-10 w-full h-full rounded-none shadow-none top-0 left-0 transform-none';
    if (position === 1) return 'translate-x-0 z-20 w-full h-full rounded-none shadow-none top-0 left-0 transform-none';
    if (position === 2) return 'left-[calc(50%+220px)] top-1/2 -translate-y-1/2 z-10 w-48 h-72 rounded-3xl shadow-2xl';
    if (position === 3) return 'left-[calc(50%+440px)] top-1/2 -translate-y-1/2 z-10 w-48 h-72 rounded-3xl shadow-2xl';
    if (position === 4) return 'left-[calc(50%+660px)] top-1/2 -translate-y-1/2 z-10 w-48 h-72 rounded-3xl shadow-2xl';
    return 'left-[calc(50%+880px)] top-1/2 -translate-y-1/2 z-10 w-48 h-72 rounded-3xl shadow-2xl opacity-0';
  };

  const isLargeImage = (index: number) => {
    const position = (index - currentSlide + slides.length) % slides.length;
    return position === 0 || position === 1;
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Set up automatic slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gray-50 shadow-4xl">
        
        {/* Slides Container */}
        <div className="relative w-full h-full mt-12">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-all duration-500 z-20 ease-in-out bg-cover bg-center bg-no-repeat ${getSlidePosition(index)}`}
              style={{ 
                backgroundImage: `url(${slide.image})` 
              }}
            >
              {/* Adding darkness overlay only for large images */}
              {isLargeImage(index) && (
                <div className="absolute inset-0 bg-black opacity-30 rounded-none"></div>
              )}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateY(100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;