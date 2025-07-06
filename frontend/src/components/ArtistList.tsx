import type { Artist } from "../types";
import ArtistCard from "./ArtistCard";

interface Props {
  artists: Artist[];
}

export default function ArtistList({ artists }: Props) {
  if (!artists.length) return <p>No artists found.</p>;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((a) => (
        <ArtistCard key={a._id} artist={a} />
      ))}
    </div>
  );
}
