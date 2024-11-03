import AppointmentsForm from "@/components/appointment/AppointmentForm";
import Footer from "@/components/footer/Footer";
import React from "react";

const AppointmentsPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-teal-800 p-4">
        <div className="w-full max-w-lg">
          <AppointmentsForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentsPage;
