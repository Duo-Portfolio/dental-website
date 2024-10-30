// src/components/Map.jsx
"use client";
import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[350px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.7401693454184!2d-104.89208368459286!3d39.60668177945741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c79950489b0f3%3A0x6a2a1d1e90cc0a67!2s5670%20Greenwood%20Plaza%20Blvd%2C%20Suite%20404%2C%20Greenwood%20Village%2C%20CO%2080111!5e0!3m2!1sen!2sus!4v1615924819167!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
