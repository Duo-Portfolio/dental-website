import Contact from "@/components/contact/Contact";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Location from "@/components/location/Location";
import Map from "@/components/map/map";
import DentalServices from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <DentalServices />
      <Testimonials />
      <Faq />
      <Contact />
      <Location />
      <Map />
      <Footer />
    </>
  );
}
