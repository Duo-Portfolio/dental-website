// app/services/[id]/page.jsx
import { getServiceById } from "@/model/services";
import Image from "next/image"; // Use Next.js Image for optimized images
import Slider from "../dental-service-components/Slider.jsx"; // Import the Slider component
import Footer from "@/components/footer/Footer.jsx";
import Hero from "@/components/hero/Hero.jsx";

const ServiceDetail = async ({ params }) => {
  const { id } = await params;
  const service = await getServiceById(id);

  if (!service) {
    return <div className="text-center text-red-500">Service not found.</div>;
  }

  const cases = service.cases; // Assuming service.cases is an array

  return (
    <>
      <Hero />
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
          {/* Left Content */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <h1 className="text-4xl font-bold text-teal-600 mb-2">
              {service.title}
            </h1>
            <p className="mt-2 text-lg text-gray-700">{service.description}</p>

            <div className="mt-6">
              <Image
                height={200}
                width={300}
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            <div className="mt-4 text-gray-600">{service.content}</div>

            {/* Pricing Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-teal-600">Pricing</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {Object.entries(service.prices).map(([key, value]) => {
                  if (typeof value === "object") {
                    // Handle nested objects for composite restoration
                    return (
                      <li key={key}>
                        <span className="font-medium">{key}:</span>
                        <ul className="list-disc list-inside mt-1">
                          {Object.entries(value).map(([subKey, subValue]) => (
                            <li key={subKey}>
                              {subKey}: {subValue}$
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={key}>
                      <span className="font-medium">{key}:</span> {value}$
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Packages Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-teal-600">Packages</h2>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {Object.entries(service.packages).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Slider */}
          {cases.length > 0 && (
            <div className="flex-1">
              <Slider cases={cases} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
