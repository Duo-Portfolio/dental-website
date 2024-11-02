"use client";
import React from "react";
import Link from "next/link"; // Import Link for client-side navigation
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">5670 Greenwood Plaza Blvd, Suite 404</p>
          <p className="mb-2">Greenwood Village, CO 80111</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@yourclinic.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-lg hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-lg hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-lg hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Offered */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/cleaning"
                className="text-lg hover:underline"
              >
                Teeth Cleaning
              </Link>
            </li>
            <li>
              <Link
                href="/services/whitening"
                className="text-lg hover:underline"
              >
                Teeth Whitening
              </Link>
            </li>
            <li>
              <Link
                href="/services/fillings"
                className="text-lg hover:underline"
              >
                Fillings
              </Link>
            </li>
            <li>
              <Link
                href="/services/root-canal"
                className="text-lg hover:underline"
              >
                Root Canal
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Our Clinic</h3>
          <p className="mb-2">
            We are dedicated to providing exceptional dental care in a
            comfortable and friendly environment. Our team of experienced
            professionals is here to help you achieve and maintain a healthy
            smile.
          </p>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:text-teal-300 transition duration-200" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-teal-300 transition duration-200" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-teal-300 transition duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:text-teal-300 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup and Testimonials */}
      <div className="bg-teal-700 p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Join Our Newsletter
        </h3>
        <form className="flex flex-col sm:flex-row justify-center mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-md text-black w-full sm:w-1/3 mb-2 sm:mb-0"
            required
          />
          <button
            type="submit"
            className="bg-teal-300 text-teal-600 font-semibold p-2 rounded-md transition duration-200 hover:bg-yellow-300 sm:ml-2"
          >
            <FaEnvelope className="inline mr-2" /> Subscribe
          </button>
        </form>

        <h3 className="text-lg font-semibold mb-4 text-center">
          What Our Patients Say
        </h3>
        <p className="text-center italic">
          &#32;Excellent service! I always feel comfortable and well taken care
          of.&#34; - Happy Patient
        </p>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Clinic Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
