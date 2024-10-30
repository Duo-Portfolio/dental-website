// src/components/Testimonials.jsx
"use client"; // Indicate that this component uses client-side rendering
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Fetch testimonials data directly from the JSON file
const testimonialsData = require("./data.json"); // Adjust the path as needed

const Testimonials = () => {
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      // Clone items for infinite effect
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
          className="text-4xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Users Say
        </motion.h2>

        <div className="relative overflow-hidden">
          <ul
            ref={scrollerRef}
            className={`flex min-w-full shrink-0 gap-8 py-4 w-max ${
              start && "animate-scroll"
            }`}
            style={{
              animation: "scroll 40s linear infinite", // Change duration based on speed
            }}
          >
            {testimonialsData.map((testimonial) => (
              <li
                key={testimonial.id}
                className="bg-gradient-to-r from-teal-500 to-teal-400 p-8 rounded-xl shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                style={{ minHeight: "200px", width: "600px" }} // Fixed card width for better text wrapping
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-teal-700 shadow-lg mr-4" // Enhanced avatar styling
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
                <p
                  className="text-white text-2xl italic mb-4 text-center max-h-24 overflow-hidden overflow-ellipsis"
                  title={testimonial.feedback}
                >
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center justify-center">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-white mr-1" />
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
