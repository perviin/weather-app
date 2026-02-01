import React from "react";

export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-sky-500 border-t-transparent"></div>
        <p className="mt-4 text-slate-700 font-light text-lg">Chargement...</p>
      </div>
    </div>
  );
}
