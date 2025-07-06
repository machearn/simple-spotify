// backend/scripts/seed.ts
import "dotenv/config";
import mongoose from "mongoose";
import Artist from "../src/models/artist.model";
import Song from "../src/models/song.model";
import User from "../src/models/user.model";

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("❌  MONGO_URI not set");

  await mongoose.connect(uri);
  console.log("🗄️  Connected to MongoDB\n");

  // --- optional wipe --------------------------------------------------------
  await Promise.all([
    Artist.deleteMany({}),
    Song.deleteMany({}),
    User.deleteMany({}),
  ]);
  console.log("🧹  Old data cleared");

  // --- seed artists ---------------------------------------------------------
  const [adele, coldplay, badBunny] = await Artist.insertMany([
    { name: "Adele", genre: "pop" },
    { name: "Coldplay", genre: "rock" },
    { name: "Bad Bunny", genre: "latin" },
  ]);
  console.log("🎤  Artists inserted");

  // --- seed songs -----------------------------------------------------------
  const songs = await Song.insertMany([
    { title: "Hello", artist: adele._id, genre: "pop", language: "English" },
    {
      title: "Easy on Me",
      artist: adele._id,
      genre: "pop",
      language: "English",
    },
    {
      title: "Yellow",
      artist: coldplay._id,
      genre: "rock",
      language: "English",
    },
    {
      title: "Viva la Vida",
      artist: coldplay._id,
      genre: "rock",
      language: "English",
    },
    {
      title: "Tití Me Preguntó",
      artist: badBunny._id,
      genre: "latin",
      language: "Spanish",
    },
    {
      title: "Dakiti",
      artist: badBunny._id,
      genre: "latin",
      language: "Spanish",
    },
  ]);
  console.log("🎵  Songs inserted");

  // --- seed users -----------------------------------------------------------
  const [alice, bob] = await User.insertMany([
    {
      username: "alice",
      email: "alice@example.com",
      password: "password", // plaintext for demo ONLY
      likedSongs: [songs[0]._id, songs[2]._id, songs[4]._id],
      followedArtists: [adele._id, coldplay._id],
    },
    {
      username: "bob",
      email: "bob@example.com",
      password: "password",
      likedSongs: [songs[1]._id, songs[3]._id],
      followedArtists: [coldplay._id, badBunny._id],
    },
  ]);
  console.log("👤  Users inserted");

  // --------------------------------------------------------------------------
  console.log("\n✅  Seed complete!");
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
