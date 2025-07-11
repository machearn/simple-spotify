import { useEffect, useState } from "react";
import api from "../api";
import type { Artist } from "../types";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import type { FiltersState } from "../components/Filters";
import ArtistList from "../components/ArtistList";

export default function Artists() {
  const [search, setSearch] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filters, setFilters] = useState<FiltersState>({
    genre: "",
  });
  const userId = "686b0d92c2f3f423f3763344";

  useEffect(() => {
    const params = { search, ...filters };
    api
      .get<Artist[]>("/artists", { params })
      .then((res) => setArtists(res.data));
  }, [search, filters]);

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <Filters
        filters={filters}
        setFilters={setFilters}
        config={{ language: false }}
      />
      <ArtistList userId={userId} artists={artists} />
    </div>
  );
}
