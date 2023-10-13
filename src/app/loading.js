'use client'
import { useState, useEffect } from 'react';

const Loading = () => {
  const imagePaths = ['/load1.svg', '/load2.svg', '/load3.svg']; // Update paths to your SVG images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image in the sequence
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
      );
    }, 800); // Change images every 0.5 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullScreen">
      <div className="centered">
        <img
          src={imagePaths[currentImageIndex]}
          alt="Loading"
          className="image" // Apply a class to set the image size
        />
      </div>
    </div>
  );
};

export default Loading;