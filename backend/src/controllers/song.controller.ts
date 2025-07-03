import { Request, Response } from "express";
import Song from "../models/song.model";
import Artist from "../models/artist.model";

/** GET /songs?search=&language=&genre= */
export async function searchSongs(req: Request, res: Response) {
  const { search = "", language, genre } = req.query as Record<string, string>;
  const query: any = {
    ...(language && { language }),
    ...(genre && { genre }),
  };

  // text search on title + artist name
  if (search) {
    const artistIds = await Artist.find({
      name: new RegExp(search, "i"),
    }).select("_id");
    query.$or = [
      { title: new RegExp(search, "i") },
      { artist: { $in: artistIds } },
    ];
  }

  const songs = await Song.find(query).populate("artist");
  res.json(songs);
}
