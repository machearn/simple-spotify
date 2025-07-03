// tests/artist.test.ts
import request from "supertest";
import app from "../src/app";
import User from "../src/models/user.model";
import Artist from "../src/models/artist.model";

describe("Artist follow", () => {
  it("follows an artist", async () => {
    const artist = await Artist.create({ name: "Coldplay", genre: "rock" });
    const user = await User.create({
      username: "carol",
      email: "c@x.com",
      password: "123",
    });

    const res = await request(app)
      .put("/user/artists")
      .send({ userId: user.id, artistId: artist.id });
    expect(res.body.message).toBe("Artist followed");

    const updated = await User.findById(user.id);
    expect(updated?.followedArtists).toContainEqual(artist._id);
  });
});
