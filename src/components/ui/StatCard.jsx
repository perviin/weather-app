import React from "react";

export default function StatCard({ icon: Icon, label, value, delay }) {
  return (
    <div
      className="stat-card glass-card rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-center mb-3 text-blue-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <p className="text-slate-600 font-light mb-1">{label}</p>
      <p className="text-2xl font-semibold text-slate-800">{value}</p>
    </div>
  );
}
