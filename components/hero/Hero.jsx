// app/components/Hero.jsx

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white py-40 px-6 text-center">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{" "}
        {/* Darker overlay for better text visibility */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-200">
          Welcome to Our Dental Clinic
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-gray-200">
          Your smile is our priority. Quality dental care for the whole family.
        </p>

        <Link href="/appointment">
          <span className="inline-block bg-teal-500 text-white rounded-full px-10 py-4 font-semibold text-lg lg:text-xl shadow-lg transition duration-300 transform hover:bg-teal-600 hover:scale-105">
            Book Appointment
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
