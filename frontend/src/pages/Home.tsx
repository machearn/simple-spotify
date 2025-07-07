import { useState, useEffect } from "react";
import api from "../api";
import type { Song } from "../types";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import type { FiltersState } from "../components/Filters";
import SongList from "../components/SongList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<FiltersState>({
    genre: "",
    language: "",
  });
  const [songs, setSongs] = useState<Song[]>([]);
  const userId = "686b0d92c2f3f423f3763344";

  useEffect(() => {
    const params = { search, ...filters };
    api.get<Song[]>("/songs", { params }).then((res) => setSongs(res.data));
  }, [search, filters]);

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <Filters filters={filters} setFilters={setFilters} />
      <SongList songs={songs} userId={userId} />
    </div>
  );
}
