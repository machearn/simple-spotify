import { Request, Response } from "express";
import User from "../models/user.model";

/** PUT /user/info */
export async function updateProfile(req: Request, res: Response) {
  const { userId, username, email, password } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { username, email, password },
    { new: true, runValidators: true },
  ).select("-password");
  res.json(user);
}

/** GET /user/songs?userId=<id> */
export async function getLikedSongs(req: Request, res: Response) {
  const { userId } = req.query as { userId: string };
  const user = await User.findById(userId).populate({
    path: "likedSongs",
    populate: "artist",
  });
  res.json(user?.likedSongs ?? []);
}

/** PUT /songs (like) – delegated here for brevity */
export async function likeSong(req: Request, res: Response) {
  const { userId, songId } = req.body;
  await User.findByIdAndUpdate(
    userId,
    { $addToSet: { likedSongs: songId } },
    { new: true },
  );
  res.json({ message: "Song liked" });
}

/** PUT /artists (follow) – delegated here for brevity */
export async function followArtist(req: Request, res: Response) {
  const { userId, artistId } = req.body;
  await User.findByIdAndUpdate(
    userId,
    { $addToSet: { followedArtists: artistId } },
    { new: true },
  );
  res.json({ message: "Artist followed" });
}
