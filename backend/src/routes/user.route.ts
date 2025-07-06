import { Router } from "express";
import {
  updateProfile,
  getLikedSongs,
  likeSong,
  followArtist,
  getProfile,
  getFollowedArtists,
} from "../controllers/user.controller";

const router = Router();

router.get("/songs", getLikedSongs); // /user/songs
router.get("/info", getProfile); // /user/info
router.get("/artists", getFollowedArtists);
router.put("/info", updateProfile); // /user/info
router.put("/songs", likeSong); // /user/songs (alias)
router.put("/artists", followArtist); // /user/artists

export default router;
