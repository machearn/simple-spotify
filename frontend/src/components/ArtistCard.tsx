import type { Artist } from "../types";

interface Props {
  artist: Artist;
  followed: boolean;
  click: () => void;
}

export default function ArtistCard({ artist, followed, click }: Props) {
  return (
    <div className="flex flex-col justify-between w-60 p-4 border rounded shadow hover:shadow-md bg-white">
      <div>
        <h3 className="font-semibold text-lg mb-1">{artist.name}</h3>
        <p className="text-sm text-gray-600">{artist.genre || "—"}</p>
      </div>
      {followed ? (
        <button className="mt-3 px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700">
          + Followed
        </button>
      ) : (
        <button
          onClick={click}
          className="mt-3 px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
        >
          + Follow
        </button>
      )}
    </div>
  );
}
