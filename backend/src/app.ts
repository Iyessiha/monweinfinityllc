import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middleware/errorHandler";
import contactRouter from "./routes/contact";
import waitlistRouter from "./routes/waitlist";
import healthRouter from "./routes/health";

const app = express();

// Security headers
app.use(helmet());

// CORS
const origins = (process.env.ALLOWED_ORIGINS ?? "http://localhost:5173").split(",");
app.use(cors({ origin: origins, credentials: true }));

// Body parsing
app.use(express.json({ limit: "50kb" }));

// Global rate limiter
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Routes
app.use("/health", healthRouter);
app.use("/api/contact", contactRouter);
app.use("/api/waitlist", waitlistRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handler
app.use(errorHandler);

export default app;
