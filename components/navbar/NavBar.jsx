import { FaTooth } from "react-icons/fa";
import Link from "next/link";
import { getDoctors } from "@/model/doctors";

const Navbar = () => {
  const doctors = getDoctors();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center text-teal-700 text-3xl font-bold transform hover:scale-105 transition-transform duration-300 hover:animate-bounce">
          <FaTooth className="mr-2" />
          <span className="font-serif">Dental Clinic</span>
        </div>

        {/* Nav Links */}
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-9">
            <li>
              <Link href="/">
                <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer relative group">
                  Home
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#services" scroll={true}>
                <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer relative group">
                  Services
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>
            </li>

            {/* About Us with Dropdown */}
            <li className="relative group">
              <Link href="/about">
                <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer">
                  About Us
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>

              {/* Dropdown Links for "About Us" */}
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform z-50">
                <li>
                  <Link
                    href="/about/mission"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/careers"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </li>

            {/* Meet Our Doctors with Separate Dropdown */}
            <li className="relative group">
              <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer">
                Meet Our Doctors
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>

              {/* Dropdown Links for "Meet Our Doctors" */}
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform z-50">
                {doctors.map((doctor) => (
                  <li key={doctor.id}>
                    <Link
                      href={`/our-doctors/${doctor.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      {doctor.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link href="/#contact" scroll={true}>
                <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer relative group">
                  Contact
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <Link href="/appointment">
            <span className="bg-teal-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-teal-700 transition duration-300 shadow-lg cursor-pointer transform hover:scale-105">
              Book Appointment
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
