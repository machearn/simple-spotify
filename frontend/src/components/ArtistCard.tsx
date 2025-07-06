import api from "../api";
import type { Artist } from "../types";

interface Props {
  artist: Artist;
}

export default function ArtistCard({ artist }: Props) {
  const userId = "686899b58dc8a617bdd93d0b";
  const follow = () => api.put("/artists", { userId, artistId: artist._id });
  return (
    <div className="flex flex-col justify-between w-60 p-4 border rounded shadow hover:shadow-md bg-white">
      <div>
        <h3 className="font-semibold text-lg mb-1">{artist.name}</h3>
        <p className="text-sm text-gray-600">{artist.genre || "—"}</p>
      </div>
      <button
        onClick={follow}
        className="mt-3 px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
      >
        + Follow
      </button>
    </div>
  );
}
