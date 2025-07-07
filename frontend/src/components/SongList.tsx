import { useEffect, useState } from "react";
import api from "../api";
import type { Song } from "../types";
import SongCard from "./SongCard";

interface Props {
  songs: Song[];
  userId: string;
}

export default function SongList({ songs, userId }: Props) {
  const [likedSongs, setLikedSongs] = useState<Song[]>([]);
  useEffect(() => {
    api
      .get<Song[]>("/user/songs", { params: { userId } })
      .then((res) => setLikedSongs(res.data));
  }, [userId]);
  if (!songs.length) return <p>No songs found.</p>;
  const like = (song: Song) => {
    api
      .put("/user/songs", { userId, songId: song._id })
      .then((res) => setLikedSongs(res.data));
  };
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((s) => (
        <SongCard
          key={s._id}
          song={s}
          liked={likedSongs.some((likedSong) => s._id === likedSong._id)}
          click={() => like(s)}
        />
      ))}
    </div>
  );
}
