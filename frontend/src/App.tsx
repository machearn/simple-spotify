import { Routes, Route, Navigate, Link } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Artists from "./pages/Artists";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-emerald-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-semibold">
          <Link to="/">Spotify&nbsp;Lite</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/artists" className="hover:underline">
            Artists
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </nav>
      </header>
      <main className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}
