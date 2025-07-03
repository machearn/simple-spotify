import { Router } from "express";
import { listArtists } from "../controllers/artist.controller";

const router = Router();

router.get("/", listArtists); // /artists
// following handled on /user/artists

export default router;
