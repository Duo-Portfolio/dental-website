import doctorsTestimonials from "@/data/doctors-testimonials.json";

export function getDoctorsTestimonials() {
  return doctorsTestimonials;
}

export function getDoctorTestimonialsById(id) {
  return doctorsTestimonials.find((s) => s.id == id);
}
