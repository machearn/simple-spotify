interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search songs or artists"
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
