import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { sendMail } from "../services/mailer";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function sendContactEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { name, email, message } = schema.parse(req.body);

    await sendMail({
      to: process.env.CONTACT_EMAIL ?? "monweci@gmail.com",
      subject: `[MonWe Infinity] Message de ${name}`,
      html: `
        <h2>Nouveau message via le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès." });
  } catch (err) {
    next(err);
  }
}
