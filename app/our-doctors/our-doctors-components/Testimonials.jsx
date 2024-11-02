import { getDoctorsTestimonials } from "@/model/doctors-testimonials";

const Testimonials = async ({ doctorId }) => {
  // Fetch all testimonials
  const allTestimonials = await getDoctorsTestimonials();

  // Filter testimonials for the specific doctor
  const doctorTestimonials = allTestimonials.find(
    (testimonial) => testimonial.doctorId === doctorId
  )?.testimonials;

  // If no testimonials exist for this doctor
  if (!doctorTestimonials || doctorTestimonials.length === 0) {
    return <p>No testimonials available for this doctor.</p>;
  }

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-teal-700">Patient Testimonials</h2>
      {doctorTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="border-b border-gray-300 pb-4 mb-4 last:border-none last:pb-0"
        >
          <p className="text-xl font-semibold text-gray-800">
            {testimonial.patientName}
          </p>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
          <p className="mt-2 text-gray-700">{testimonial.comments}</p>
          <div className="flex items-center mt-2">
            <span className="font-medium text-yellow-500 mr-2">Rating:</span>
            <div className="flex space-x-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
