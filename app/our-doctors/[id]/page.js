import { getDoctorById } from "@/model/doctors";
import Testimonials from "../our-doctors-components/Testimonials";
import Footer from "@/components/footer/Footer";

const Page = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  return (
    <>
      <div className="max-w-8xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 flex flex-col md:flex-row">
        {/* Doctor's Info Section */}
        <div className="flex-1 pr-8 mb-8 md:mb-0">
          {/* Doctor's Basic Info */}
          <div className="flex items-center mb-10">
            <div className="w-40 h-40 overflow-hidden rounded-full shadow-md mr-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold text-teal-600 mb-2 hover:text-teal-500 transition duration-200">
                {doctor.name}
              </h1>
              <p className="text-gray-800 italic text-lg mb-4">
                {doctor.quote}
              </p>
            </div>
          </div>

          {/* Education Section */}
          <Section title="Education">
            {doctor.education.map((edu, index) => (
              <DetailItem
                key={index}
                title={edu.degree}
                subtitle={`${edu.institution} | ${edu.year}`}
                details={edu.details}
              />
            ))}
          </Section>

          {/* Work Experience Section */}
          <Section title="Work Experience">
            {doctor.workExperience.map((work, index) => (
              <DetailItem
                key={index}
                title={work.position}
                subtitle={`${work.location} | ${work.years}`}
                details={work.responsibilities}
              />
            ))}
          </Section>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 ml-0 md:ml-8">
          {/* Specialties Section */}
          <Section title="Specialties">
            <ul className="list-none flex flex-wrap">
              {doctor.specialties.map((specialty, index) => (
                <li
                  key={index}
                  className="flex items-center mr-6 mb-4 text-gray-700 text-lg"
                >
                  <img
                    src={specialty.icon}
                    alt={specialty.name}
                    className="w-10 h-10 mr-2"
                  />
                  <span className="font-semibold text-gray-800 text-xl hover:text-teal-600 transition duration-200">
                    {specialty.name}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Testimonials Section */}
          <Section title="Patient Testimonials">
            <Testimonials doctorId={doctor.id} />
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Helper component for section titles and content
const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-4xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

// Helper component for individual detail items
const DetailItem = ({ title, subtitle, details }) => (
  <div className="border-b border-gray-300 pb-4 last:border-none last:pb-0">
    <h3 className="text-2xl font-medium text-teal-600">{title}</h3>
    <p className="text-gray-600 text-sm">{subtitle}</p>
    <p className="text-gray-700 mt-1">{details}</p>
  </div>
);

export default Page;
