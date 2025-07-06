import { Request, Response } from "express";
import Artist from "../models/artist.model";

/** GET /artists?search=&genre= */
export async function listArtists(req: Request, res: Response) {
  const { search = "", genre } = req.query as Record<string, string>;
  const query: any = {};
  if (search) query.name = new RegExp(search, "i");
  if (genre) query.genre = genre;
  const artists = await Artist.find(query);
  res.json(artists);
}
