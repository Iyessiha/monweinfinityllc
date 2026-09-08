import nodemailer from "nodemailer";

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendMail(opts: MailOptions): Promise<void> {
  const transporter = createTransport();
  await transporter.sendMail({
    from: `"MonWe Infinity" <${process.env.SMTP_USER}>`,
    ...opts,
  });
}
