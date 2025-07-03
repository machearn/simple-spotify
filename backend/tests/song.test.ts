// tests/song.test.ts
import request from "supertest";
import app from "../src/app";
import User from "../src/models/user.model";
import Song from "../src/models/song.model";
import Artist from "../src/models/artist.model";

describe("Song like & retrieval", () => {
  it("likes a song and retrieves it", async () => {
    const artist = await Artist.create({ name: "Adele", genre: "pop" });
    const song = await Song.create({
      title: "Hello",
      artist: artist.id,
      genre: "pop",
      language: "English",
    });
    const user = await User.create({
      username: "bob",
      email: "b@x.com",
      password: "123",
    });

    // like
    const likeRes = await request(app)
      .put("/user/songs")
      .send({ userId: user.id, songId: song.id });
    expect(likeRes.statusCode).toBe(200);

    // fetch liked
    const listRes = await request(app)
      .get("/user/songs")
      .query({ userId: user.id });
    expect(listRes.body.length).toBe(1);
    expect(listRes.body[0].title).toBe("Hello");
  });
});
