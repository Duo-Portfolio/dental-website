// src/components/Location.jsx
"use client";
import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center text-teal-700 mb-12 tracking-wide">
        Our Clinic Location
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://www.alliancedental.ca/sites/www.alliancedental.ca/files/styles/max_2600x2600/public/images/location-bridgewater.jpg?itok=cTWJlI96"
            alt="Our Clinic"
            width={500}
            height={400}
            className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-3xl font-semibold text-teal-800 mb-6">
            Clinic Details
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Welcome to our dental clinic! We provide a range of dental services
            tailored to meet your needs in a comfortable, caring environment.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-teal-700">Address:</h4>
              <p className="text-lg text-gray-700">
                123 Dental St, Smile City, CA 90210
              </p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-teal-700">Phone:</h4>
              <p className="text-lg text-gray-700">(123) 456-7890</p>
            </div>

            <div>
              <h4 className="text-xl font-medium text-teal-700">
                Opening Hours:
              </h4>
              <p className="text-lg text-gray-700">
                Mon-Fri: 9:00 AM - 6:00 PM <br />
                Sat: 10:00 AM - 4:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
