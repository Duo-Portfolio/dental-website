// src/components/Testimonials.jsx
"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { getHomePageDoctors } from "@/model/home-page-doctors";

const Testimonials = () => {
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const homePageDoctorsData = getHomePageDoctors();

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  };

  return (
    <div className="bg-teal-600 py-24">
      <div className="max-w-8xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-teal-300 to-white text-center mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR DOCTORS
        </motion.h2>

        <div className="relative overflow-hidden">
          <ul
            ref={scrollerRef}
            className={`flex min-w-full shrink-0 gap-8 py-4 w-max ${
              start && "animate-scroll"
            }`}
            style={{ animation: "scroll 40s linear infinite" }}
          >
            {homePageDoctorsData.map((doctor) => (
              <li
                key={doctor.id}
                className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                style={{ minHeight: "200px", width: "600px" }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-md border-4 border-teal-700 shadow-lg mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-black">
                      {doctor.name}
                    </h4>
                    <p className="text-sm text-black">{doctor.specialty}</p>
                    <p className="text-xs text-black italic">
                      {doctor.degrees}
                    </p>
                    <p className="text-xs text-black">
                      {doctor.experience} of experience
                    </p>
                  </div>
                </div>
                <p className="text-sm text-black mb-4">{doctor.biography}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-black">Languages:</p>
                  <p className="text-xs text-black">
                    {doctor.languages.join(", ")}
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <MdPhone className="text-black mr-2" />
                  <p className="text-sm text-black">{doctor.contact.phone}</p>
                </div>
                <div className="flex items-center mb-4">
                  <MdEmail className="text-black mr-2" />
                  <p className="text-sm text-black">{doctor.contact.email}</p>
                </div>
                <div className="flex items-center justify-center">
                  {Array(doctor.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-teal-800 mr-1" />
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
