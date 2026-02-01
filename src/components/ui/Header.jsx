import React from "react";
import { formatDate } from "../../lib/utils/helpers";

export default function Header() {
  return (
    <div className="slide-in mb-8">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-2 text-center">
        Météo Actuelle
      </h1>
      <p className="text-center text-slate-600 text-lg font-light mb-6">
        {formatDate()}
      </p>
    </div>
  );
}
