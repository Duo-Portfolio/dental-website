// app/components/Hero.jsx

import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-teal-600 text-white py-20 text-center">
      <h1 className="text-[60px] font-bold mb-4">
        Welcome to Our Dental Clinic
      </h1>
      <p className="text-lg mb-8">
        Your smile is our priority. Quality dental care for the whole family.
      </p>
      <Link href="/appointment">
        <span className="bg-white text-teal-600 rounded-full px-8 py-3 font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
          Book Appointment
        </span>
      </Link>
    </section>
  );
};

export default Hero;
