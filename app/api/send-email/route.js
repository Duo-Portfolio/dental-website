import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template"; // Ensure the path is correct

const resend = new Resend("re_4nZuqnDe_FnTJAtYkFiSQCfCrc8PtkMwP");

export async function POST(request) {
  try {
    const body = await request.json(); // Parse the incoming JSON body

    // Use the incoming data to generate the email
    const emailContent = EmailTemplate(body); // Use the body directly

    // Log email content for debugging
    console.log("Email Content:", emailContent);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["deskoemad@gmail.com"],
      subject: "Appointment Confirmation",
      react: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { status: 500 }
    );
  }
}
