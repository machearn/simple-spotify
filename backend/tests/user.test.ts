// tests/user.test.ts
import request from "supertest";
import app from "../src/app";
import User from "../src/models/user.model";

describe("User endpoints", () => {
  it("edits profile + views profile", async () => {
    const user = await User.create({
      username: "alice",
      email: "a@x.com",
      password: "123",
    });

    const res1 = await request(app)
      .put("/user/info")
      .send({ userId: user.id, username: "alice2" });
    expect(res1.statusCode).toBe(200);
    expect(res1.body.username).toBe("alice2");

    const res2 = await request(app)
      .get("/user/songs")
      .query({ userId: user.id });
    expect(res2.body).toEqual([]); // no liked songs yet
  });
});
