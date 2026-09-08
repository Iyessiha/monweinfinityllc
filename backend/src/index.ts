import "dotenv/config";
import app from "./app";

const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`[MonWe API] Running on http://localhost:${PORT} — env: ${process.env.NODE_ENV}`);
});
