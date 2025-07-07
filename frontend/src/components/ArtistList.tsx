import { useEffect, useState } from "react";
import api from "../api";
import type { Artist } from "../types";
import ArtistCard from "./ArtistCard";

interface Props {
  userId: string;
  artists: Artist[];
}

export default function ArtistList({ userId, artists }: Props) {
  const [followedArtists, setFollowedArtists] = useState<Artist[]>([]);
  useEffect(() => {
    api
      .get<Artist[]>("/user/artists", { params: { userId } })
      .then((res) => setFollowedArtists(res.data));
  }, [userId]);
  if (!artists.length) return <p>No artists found.</p>;
  const follow = (artist: Artist) =>
    api
      .put("user/artists", { userId, artistId: artist._id })
      .then((res) => setFollowedArtists(res.data));
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artists.map((a) => (
        <ArtistCard
          key={a._id}
          artist={a}
          followed={followedArtists.some(
            (followedArtist) => followedArtist._id === a._id,
          )}
          click={() => follow(a)}
        />
      ))}
    </div>
  );
}
