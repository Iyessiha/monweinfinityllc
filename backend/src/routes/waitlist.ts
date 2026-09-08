import { Router } from "express";
import rateLimit from "express-rate-limit";
import { joinWaitlist, getWaitlistStats } from "../controllers/waitlistController";

const router = Router();

const joinLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: { success: false, message: "Already subscribed or too many attempts." },
});

router.post("/", joinLimiter, joinWaitlist);
router.get("/stats", getWaitlistStats); // protected in production

export default router;
