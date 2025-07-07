import { useState, useEffect } from "react";
import api from "../api";
import type { User, Song, Artist } from "../types";

export default function Profile() {
  const userId = "686b0d92c2f3f423f3763344";
  const [user, setUser] = useState<User | null>(null);
  const [likedSongs, setLikedSongs] = useState<Song[]>([]);
  const [followedArtists, setFollowedArtists] = useState<Artist[]>([]);

  useEffect(() => {
    api
      .get<User>("/user/info", { params: { userId } })
      .then((res) => setUser(res.data));
    api
      .get<Song[]>("/user/songs", { params: { userId } })
      .then((res) => setLikedSongs(res.data));
    api
      .get<Artist[]>("/user/artists", { params: { userId } })
      .then((res) => setFollowedArtists(res.data));
  }, []);

  if (!user) return <p>Loading…</p>;

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Followed Artists</h2>
        {followedArtists.length ? (
          <ul className="list-disc list-inside space-y-1">
            {followedArtists.map((a) => (
              <li key={a._id}>
                {a.name} - {a.genre}
              </li>
            ))}
          </ul>
        ) : (
          <p>No followed artist yet.</p>
        )}
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Liked Songs</h2>
        {likedSongs.length ? (
          <ul className="list-disc list-inside space-y-1">
            {likedSongs.map((s) => (
              <li key={s._id}>
                {s.title} – {s.artist.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No liked songs yet.</p>
        )}
      </section>
    </div>
  );
}
