import app from "./app";

const port = Number(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`🎵  Spotify-Lite API running on http://localhost:${port}`);
});
