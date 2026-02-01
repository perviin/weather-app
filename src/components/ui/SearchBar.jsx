import React from "react";

export default function SearchBar({
  searchInput,
  onSubmit,
  suggestions,
  showSuggestions,
  onInputChange,
  onSelectSuggestion,
  setShowSuggestions,
}) {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() =>
            searchInput && showSuggestions && setShowSuggestions(true)
          }
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Rechercher une ville..."
          className="search-input w-full px-6 py-4 rounded-full glass-card text-slate-800 placeholder-slate-500 text-lg transition-all"
          autoComplete="off"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-200 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all"
        >
          Rechercher
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg glass-card z-10 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => onSelectSuggestion(suggestion.name)}
                  className="w-full text-left px-6 py-3 hover:bg-blue-100 transition-colors text-slate-800 border-b border-slate-200 last:border-b-0"
                >
                  <span className="font-medium">{suggestion.name}</span>
                  <span className="text-slate-600 ml-2">
                    ({suggestion.country})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
