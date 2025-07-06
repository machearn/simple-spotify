import type { Song } from "../types";
import SongCard from "./SongCard";

interface Props {
  songs: Song[];
  userId: string;
}

export default function SongList({ songs, userId }: Props) {
  if (!songs.length) return <p>No songs found.</p>;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((s) => (
        <SongCard key={s._id} song={s} userId={userId} />
      ))}
    </div>
  );
}
