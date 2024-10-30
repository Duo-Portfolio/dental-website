// src/components/Services.jsx
"use client"; // This line makes the component a client component

import React from "react";
import services from "./data.json"; // Adjust the path as needed
import useParallax from "../../hooks/useParallax"; // Adjust the path as needed

const Services = () => {
  const parallaxOffset = useParallax(0.5); // Increased speed for more noticeable effect

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
        Our Dental Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-300 shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:bg-teal-50 hover:scale-105"
          >
            <div
              className="w-full h-48 object-cover relative"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(-${parallaxOffset}px) scale(1.1)`, // Added scaling effect
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="invisible"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-teal-600">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500 transition duration-200">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
