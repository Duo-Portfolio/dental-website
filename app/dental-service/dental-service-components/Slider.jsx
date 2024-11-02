"use client"; // Required for client-side rendering
import Image from "next/image"; // Use Next.js Image for optimized images
import { useState } from "react"; // Import useState to manage the slider state

const Slider = ({ cases }) => {
  // State to manage the current case index
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  // Function to handle next case
  const nextCase = () => {
    setCurrentCaseIndex((prevIndex) =>
      prevIndex === cases.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous case
  const prevCase = () => {
    setCurrentCaseIndex((prevIndex) =>
      prevIndex === 0 ? cases.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-teal-600 text-center mb-4">
        Before and After Cases
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <button
          onClick={prevCase}
          className="bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105 mb-4 md:mb-0 md:mr-12 w-10 h-10 flex items-center justify-center"
        >
          &lt;
        </button>

        <div className="relative mx-4 w-full max-w-xs md:max-w-md lg:max-w-lg">
          <div className="transition-transform duration-500 ease-in-out transform">
            <Image
              src={cases[currentCaseIndex].before}
              alt={`Before Case ${currentCaseIndex + 1}`}
              height={300}
              width={400}
              className="rounded-lg shadow-lg mb-2 transition-opacity duration-300 ease-in-out opacity-100"
            />
            <Image
              src={cases[currentCaseIndex].after}
              alt={`After Case ${currentCaseIndex + 1}`}
              height={300}
              width={400}
              className="rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
            />
          </div>
          {/* Number indicator moved below the images */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center">
            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
              <span className="text-teal-600 font-bold text-sm">
                {currentCaseIndex + 1} / {cases.length}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={nextCase}
          className="bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105 mb-4 md:mb-0 md:ml-2 w-10 h-10 flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
