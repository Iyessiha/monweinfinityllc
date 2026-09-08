import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { addToWaitlist, countWaitlist } from "../services/waitlistService";

const schema = z.object({
  email: z.string().email(),
  product: z.enum(["asili", "infinity-pay", "platform"]).default("platform"),
  lang: z.enum(["fr", "en"]).default("fr"),
});

export async function joinWaitlist(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = schema.parse(req.body);
    await addToWaitlist(data);
    res.status(201).json({ success: true, message: "Vous êtes sur la liste d'attente !" });
  } catch (err) {
    next(err);
  }
}

export async function getWaitlistStats(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const count = await countWaitlist();
    res.json({ success: true, count });
  } catch (err) {
    next(err);
  }
}
