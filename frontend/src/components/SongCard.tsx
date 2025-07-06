import api from "../api";
import type { Song } from "../types";

interface Props {
  song: Song;
  userId: string;
}

export default function SongCard({ song, userId }: Props) {
  const like = () => api.put("/user/songs", { userId, songId: song._id });
  return (
    <div className="flex flex-col justify-between w-60 p-4 border rounded shadow hover:shadow-md bg-white">
      <div>
        <h3 className="font-semibold text-lg mb-1">{song.title}</h3>
        <p className="text-sm text-gray-600">
          {song.artist.name} · {song.genre || "—"} · {song.language || "—"}
        </p>
      </div>
      <button
        onClick={like}
        className="mt-3 px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      >
        ♥ Like
      </button>
    </div>
  );
}
