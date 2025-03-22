// import { NextResponse } from "next/server"

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()
//     const { name, email, subject, message } = data

//     // Validate form data
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json({ error: "All fields are required" }, { status: 400 })
//     }

//     // In a real implementation, you would use a service like SendGrid, Nodemailer, or Resend
//     // For this example, we'll simulate a successful email send

//     // Log the email data (for demonstration purposes)
//     console.log("Email data:", {
//       to: "aryanpatel8044@gmail.com",
//       from: email,
//       subject: `Portfolio Contact: ${subject}`,
//       name,
//       message,
//     })

//     // Simulate a slight delay as if sending an email
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 })
//   } catch (error) {
//     console.error("Error sending email:", error)
//     return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
//   }
// }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email (set in .env file)
        pass: process.env.EMAIL_PASS, // App password (set in .env file)
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "patelaryan2707@gmail.com", // ✅ Email will be sent to this address
      subject: `Portfolio Contact: ${subject}`,
      text: `You have a new message from your portfolio contact form:
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
