import React from "react";

export default function ErrorState({ error, onRetry }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-md text-center shadow-2xl">
        <p className="text-red-600 text-xl mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
