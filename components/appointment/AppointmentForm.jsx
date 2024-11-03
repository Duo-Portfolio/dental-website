"use client";
import React, { useState } from "react";

const AppointmentsForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    forSomeoneElse: false,
    phoneNumber: "",
    email: "",
    package: "",
    country: "",
    insurance: "",
    appointmentDate: "",
    doctor: "",
  });
  const [errors, setErrors] = useState({ firstName: "", secondName: "" });

  const handleNext = () => {
    let newErrors = { firstName: "", secondName: "" };
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.secondName) {
      newErrors.secondName = "Last name is required";
    }
    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.secondName) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailData = { ...formData };
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const responseData = await res.json();
      if (!res.ok) {
        throw new Error(responseData.error || "Failed to send email");
      }
      alert("Appointment booked and email sent!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform"
      style={{ maxHeight: "90vh" }}
    >
      <h2 className="text-3xl font-semibold text-teal-600 text-center mb-6">
        Book an Appointment
      </h2>

      {step === 1 && (
        <>
          <label className="block mb-4">
            <span className="text-gray-700">First Name:</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Second Name:</span>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
            {errors.secondName && (
              <span className="text-red-500 text-sm">{errors.secondName}</span>
            )}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Registering for Someone Else:</span>
            <input
              type="checkbox"
              name="forSomeoneElse"
              checked={formData.forSomeoneElse}
              onChange={handleChange}
              className="ml-2 h-5 w-5"
            />
          </label>
          <button
            type="button"
            onClick={handleNext}
            className="mt-6 w-full bg-teal-600 text-white p-3 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <label className="block mb-4">
            <span className="text-gray-700">Phone Number:</span>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Package:</span>
            <input
              type="text"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Country:</span>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Insurance:</span>
            <select
              name="insurance"
              value={formData.insurance}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            >
              <option value="">Select Insurance</option>
              <option value="Insurance1">Insurance1</option>
              <option value="Insurance2">Insurance2</option>
            </select>
          </label>
          <button
            type="button"
            onClick={handleNext}
            className="m-1 w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition duration-200"
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="m-1 w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200"
          >
            Back
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <label className="block mb-4">
            <span className="text-gray-700">Appointment Date:</span>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Doctor:</span>
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-teal-400"
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full bg-green-800 text-white p-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="mt-4 w-full bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition duration-200"
          >
            Back
          </button>
        </>
      )}
    </form>
  );
};

export default AppointmentsForm;
