import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: "SSLv3",
  },
});

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const mailOptions = {
      //   from: email,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Subject: ${subject}</p>
         <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Message sending failed"},
      { status: 500 }
    );
  }
}
