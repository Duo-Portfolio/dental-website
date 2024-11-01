// src/components/Faq.jsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "./data.json"; // Adjust path if needed

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-100 py-16 px-6">
      <h2 className="text-4xl text-center font-bold text-teal-600 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.faqs.map((faq, index) => (
          <div key={index} className="border-b border-teal-600">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-teal-600 focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-teal-700 text-sm py-4 px-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
