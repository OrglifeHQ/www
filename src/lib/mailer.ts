import { createTransport, TransportOptions } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
} as SMTPTransport.Options);
