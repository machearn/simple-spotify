import React from "react";

export interface FiltersState {
  genre?: string;
  language?: string;
}
interface FilterConfig {
  genre?: boolean; // show genre dropdown?
  language?: boolean; // show language dropdown?
}
interface Props {
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
  config?: FilterConfig; // by default both dropdowns are shown
}

export default function Filters({ filters, setFilters, config }: Props) {
  const cfg: Required<FilterConfig> = {
    genre: true,
    language: true,
    ...config,
  };
  const update =
    (key: keyof FiltersState) => (e: React.ChangeEvent<HTMLSelectElement>) =>
      setFilters({ ...filters, [key]: e.target.value });

  return (
    <div className="flex gap-4 my-4">
      {cfg.genre && (
        <select
          className="p-2 border rounded"
          value={filters.genre ?? ""}
          onChange={update("genre")}
        >
          <option value="">Genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="latin">Latin</option>
        </select>
      )}

      {cfg.language && (
        <select
          className="p-2 border rounded"
          value={filters.language ?? ""}
          onChange={update("language")}
        >
          <option value="">Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
        </select>
      )}
    </div>
  );
}
