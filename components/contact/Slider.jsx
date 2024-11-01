// src/components/Slider.jsx
"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://verainterior.com/wp-content/uploads/2024/05/Dental-Clinic-Interior-Design-jpg.webp", // Replace with your image paths
  "https://i.pinimg.com/originals/d3/6a/67/d36a676ab7805c355eddfadc0beab80a.jpg",
  "https://www.atelierzoz.com/wp-content/uploads/2022/11/atelierzoz-works-dental-clinic-7.jpg",
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
