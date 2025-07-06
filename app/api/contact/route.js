import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { prenom, nom, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER, // ton adresse email
      pass: process.env.MAIL_PASS, // mot de passe ou app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${prenom} ${nom}" <${email}>`,
      to: "ajlcresci@gmail.com", // l'adresse qui recevra les messages
      subject: "Nouveau message depuis le formulaire de contact",
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}