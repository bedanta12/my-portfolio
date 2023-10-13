import React, { useState, useEffect } from 'react';
import styles from 'globals.css'; // Import your CSS module
const imagePaths = ['/load1.svg', '/load2.svg', '/load3.svg']; // Add the paths to your images

const LoadingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Move to the next image in the sequence
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
        );
      }, 500); // Change images every 1 second
  
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
  
  export default LoadingPage;