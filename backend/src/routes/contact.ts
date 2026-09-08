import { Router } from "express";
import rateLimit from "express-rate-limit";
import { sendContactEmail } from "../controllers/contactController";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, message: "Too many messages. Please try again in an hour." },
});

router.post("/", contactLimiter, sendContactEmail);

export default router;
