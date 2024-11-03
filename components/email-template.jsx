import * as React from "react";
import {
  Html,
  Head,
  Body,
  Section,
  Text,
  Heading,
  Img,
} from "@react-email/components";

export const EmailTemplate = ({
  firstName,
  secondName,
  phoneNumber,
  email,
  packageName,
  country,
  insurance,
  appointmentDate,
  doctor,
}) => (
  <Html>
    <Head>
      <style>{`
        body {
          font-family: Arial, sans-serif;
          line-height: 1.5;
          background-color: #f4f4f4;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777;
          margin-top: 20px;
        }
      `}</style>
    </Head>
    <Body>
      <Section className="container">
        <div className="header">
          <Heading>Appointment Booking Confirmation</Heading>
          <Img
            src="https://yourclinic.com/logo.png"
            alt="Clinic Logo"
            width="100"
          />
        </div>
        <Text>
          Dear {firstName} {secondName},
        </Text>
        <Text>Your appointment has been successfully booked!</Text>
        <Text>Details:</Text>
        <Text>----------------------------</Text>
        <Text>
          <strong>Phone Number:</strong> {phoneNumber}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Package:</strong> {packageName}
        </Text>
        <Text>
          <strong>Country:</strong> {country}
        </Text>
        <Text>
          <strong>Insurance:</strong> {insurance}
        </Text>
        <Text>
          <strong>Appointment Date:</strong> {appointmentDate}
        </Text>
        <Text>
          <strong>Doctor:</strong> {doctor}
        </Text>
        <Text>----------------------------</Text>
        <Text>Thank you for choosing our clinic!</Text>
        <Text>Best Regards,</Text>
        <Text>Your Clinic Team</Text>
        <div className="footer">
          <Text>If you have any questions, feel free to contact us.</Text>
          <Text>© {new Date().getFullYear()} Your Clinic Name</Text>
        </div>
      </Section>
    </Body>
  </Html>
);
