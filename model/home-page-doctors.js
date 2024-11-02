import homePageDoctors from "@/data/home-page-doctors.json";

export function getHomePageDoctors() {
  return homePageDoctors;
}

export function getHomePageDoctorsById(id) {
  return testimonials.find((t) => t.id == id);
}
