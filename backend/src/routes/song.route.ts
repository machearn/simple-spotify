import { Router } from "express";
import { searchSongs } from "../controllers/song.controller";

const router = Router();

router.get("/", searchSongs); // /songs
// liking handled on /user/songs

export default router;
