import doctors from "@/data/doctors.json";

export function getDoctors() {
  return doctors;
}

export function getDoctorById(id) {
  return doctors.find((s) => s.id == id);
}
