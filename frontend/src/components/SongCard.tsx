import type { Song } from "../types";

interface Props {
  song: Song;
  liked: boolean;
  click: () => void;
}

export default function SongCard({ song, liked, click }: Props) {
  return (
    <div className="flex flex-col justify-between w-60 p-4 border rounded shadow hover:shadow-md bg-white">
      <div>
        <h3 className="font-semibold text-lg mb-1">{song.title}</h3>
        <p className="text-sm text-gray-600">
          {song.artist.name} · {song.genre || "—"} · {song.language || "—"}
        </p>
      </div>
      {liked ? (
        <button className="mt-3 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
          ♥ Liked
        </button>
      ) : (
        <button
          onClick={click}
          className="mt-3 px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          ♥ Like
        </button>
      )}
    </div>
  );
}
