import React from "react";

export default function SearchBar({ searchInput, setSearchInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Rechercher une ville..."
          className="search-input w-full px-6 py-4 rounded-full glass-card text-slate-800 placeholder-slate-500 text-lg transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-200 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
