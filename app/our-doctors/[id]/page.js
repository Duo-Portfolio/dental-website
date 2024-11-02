import { getDoctorById } from "@/model/doctors";
import Testimonials from "../our-doctors-components/Testimonials";

const page = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Doctor's Basic Info */}
      <div className="flex items-center mb-8">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mr-6 shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-teal-600 mb-2">
            {doctor.name}
          </h1>
          <p className="text-gray-700 italic">{doctor.quote}</p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {doctor.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium text-teal-600">{edu.degree}</h3>
            <p className="text-gray-600">
              {edu.institution} | {edu.year}
            </p>
            <p className="text-gray-700 mt-1">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Work Experience
        </h2>
        {doctor.workExperience.map((work, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-medium text-teal-600">
              {work.position}
            </h3>
            <p className="text-gray-600">
              {work.location} | {work.years}
            </p>
            <p className="text-gray-700 mt-1">{work.responsibilities}</p>
          </div>
        ))}
      </div>

      {/* Specialties */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Specialties
        </h2>
        <ul className="list-disc list-inside">
          {doctor.specialties.map((specialty, index) => (
            <li key={index} className="text-gray-700">
              {specialty}
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Certifications
        </h2>
        <ul className="list-disc list-inside">
          {doctor.certifications.map((cert, index) => (
            <li key={index} className="text-gray-700">
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Languages Spoken
        </h2>
        <ul className="list-disc list-inside">
          {doctor.languages.map((language, index) => (
            <li key={index} className="text-gray-700">
              {language}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {doctor.contact.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {doctor.contact.phone}
        </p>
      </div>
      <Testimonials doctorId={doctor.id} />
    </div>
  );
};

export default page;
