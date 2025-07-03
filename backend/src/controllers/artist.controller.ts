import { Request, Response } from "express";
import Artist from "../models/artist.model";

/** GET /artists?search= */
export async function listArtists(req: Request, res: Response) {
  const { search = "" } = req.query as Record<string, string>;
  const artists = await Artist.find(
    search ? { name: new RegExp(search, "i") } : {},
  );
  res.json(artists);
}
