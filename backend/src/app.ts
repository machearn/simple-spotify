import express from "express";
import cors from "cors";
import morgan from "morgan";

// Routers
import userRoutes from "./routes/user.route";
import songRoutes from "./routes/song.route";
import artistRoutes from "./routes/artist.route";

const app = express();

// ── global middleware ────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// ── route mounts ────────────────────────────────────────────────────────────
app.use("/user", userRoutes);
app.use("/songs", songRoutes);
app.use("/artists", artistRoutes);

// ── basic health-check ──────────────────────────────────────────────────────
app.get("/health", (_, res) => {
  res.json({ ok: true });
});

export default app; // <- server.ts will import this
