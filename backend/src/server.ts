import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
connectDB(); // connect once at startup

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`🎵  Spotify-Lite API running on http://localhost:${port}`);
});
