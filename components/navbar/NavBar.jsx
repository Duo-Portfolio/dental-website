import { FaTooth } from "react-icons/fa";
import Link from "next/link";
import { getDoctors } from "@/model/doctors";

const Navbar = () => {
  const doctors = getDoctors() || []; // Ensure doctors is always an array

  // Navigation items configuration
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    {
      label: "About Us",
      href: "/about",
      dropdown: [
        { label: "Our Mission", href: "/about/mission" },
        { label: "Careers", href: "/about/careers" },
      ],
    },
    {
      label: "Meet Our Doctors",
      dropdown:
        doctors.length > 0
          ? doctors.map((doctor) => ({
              label: doctor.name,
              href: `/our-doctors/${doctor.id}`,
            }))
          : [], // Ensure dropdown is empty if no doctors are available
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center text-teal-700 text-3xl font-bold transform hover:scale-105 transition-transform duration-300 hover:animate-bounce mb-4 md:mb-0">
          <FaTooth className="mr-2" />
          <span className="font-serif">Dental Clinic</span>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-[40px] text-black"
          >
            <span className="material-icons">menu</span>
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <div className="absolute left-0 z-10 w-40 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg hidden peer-checked:block">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <span className="relative group block px-4 py-2 text-gray-700 cursor-pointer">
                      {item.label}
                      <span className="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform z-50 invisible group-hover:visible">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex md:justify-center flex-grow">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.label === "Meet Our Doctors" ? (
                  <span className="font-serif text-gray-700 text-lg cursor-pointer relative group">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-full h-1 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <span className="absolute left-0 top-full mt-1 w-40 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform z-50 invisible group-hover:visible">
                      {item.dropdown?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </span>
                  </span>
                ) : (
                  <>
                    <Link href={item.href}>
                      <span className="font-serif text-gray-700 text-lg hover:text-teal-600 transition duration-300 cursor-pointer relative group">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>
                    </Link>
                    {item.dropdown?.length > 0 && (
                      <span className="absolute left-0 top-full w-40 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform z-50 invisible group-hover:visible">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </span>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <Link href="/appointment">
            <span className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full px-8 py-3 font-semibold text-lg hover:bg-teal-700 transition duration-300 shadow-lg cursor-pointer transform hover:scale-105 hover:shadow-xl">
              Book Appointment
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
