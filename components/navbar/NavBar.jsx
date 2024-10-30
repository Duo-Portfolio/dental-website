// import React from "react";
// import Link from "next/link";
// import { FaTooth } from "react-icons/fa"; // Make sure to install react-icons

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center text-teal-700 text-3xl font-bold transform hover:scale-105 transition-transform duration-300">
//           <FaTooth className="mr-2 animate-bounce" />
//           <span>Dental Clinic</span>
//         </div>

//         {/* Nav Links */}
//         <div className="flex-grow flex justify-center">
//           <ul className="flex space-x-8">
//             <li>
//               <Link href="/">
//                 <span className="text-gray-700 hover:text-teal-600 transition duration-300 cursor-pointer relative group">
//                   Home
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services">
//                 <span className="text-gray-700 hover:text-teal-600 transition duration-300 cursor-pointer relative group">
//                   Services
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about">
//                 <span className="text-gray-700 hover:text-teal-600 transition duration-300 cursor-pointer relative group">
//                   About Us
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <span className="text-gray-700 hover:text-teal-600 transition duration-300 cursor-pointer relative group">
//                   Contact
//                   <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center">
//           {/* Contact Button */}
//           <Link href="/appointment">
//             <span className="bg-teal-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-teal-700 transition duration-300 shadow-lg cursor-pointer transform hover:scale-105">
//               Book Appointment
//             </span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
