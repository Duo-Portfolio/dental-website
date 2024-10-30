// src/components/Location.jsx
"use client";
import React from "react";
import Image from "next/image"; // Import Image component for optimized image loading

const Location = () => {
  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-4xl text-center font-bold text-teal-600 mb-10">
        Our Clinic Location
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/path/to/your/clinic-image.jpg" // Replace with your clinic image path
            alt="Our Clinic"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">
            Clinic Details
          </h3>
          <p className="text-gray-700 mb-4">
            Welcome to our dental clinic! We offer a range of dental services to
            meet your needs in a comfortable and friendly environment.
          </p>
          <h4 className="text-lg font-medium text-teal-600">Address:</h4>
          <p className="text-gray-700 mb-2">
            123 Dental St, Smile City, CA 90210
          </p>
          <h4 className="text-lg font-medium text-teal-600">Phone:</h4>
          <p className="text-gray-700 mb-4">(123) 456-7890</p>
          <h4 className="text-lg font-medium text-teal-600">Opening Hours:</h4>
          <p className="text-gray-700">
            Mon-Fri: 9:00 AM - 6:00 PM <br />
            Sat: 10:00 AM - 4:00 PM <br />
            Sun: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
