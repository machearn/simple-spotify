export interface Artist {
  _id: string;
  name: string;
  genre?: string;
}

export interface Song {
  _id: string;
  title: string;
  artist: Artist;
  genre?: string;
  language?: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  likedSongs: Song[];
  followedArtists: Artist[];
}
