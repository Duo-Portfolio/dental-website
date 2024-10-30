// src/components/Slider.jsx
"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/path/to/your/image1.jpg", // Replace with your image paths
  "/path/to/your/image2.jpg",
  "/path/to/your/image3.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500"
      />
    </div>
  );
};

export default Slider;
