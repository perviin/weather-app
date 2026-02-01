import React from "react";
import { formatTime } from "../../lib/utils/helpers";

export default function Footer() {
  return (
    <div className="text-center mt-8 fade-in">
      <p className="text-slate-600 font-light">
        Dernière mise à jour: {formatTime()}
      </p>
    </div>
  );
}
