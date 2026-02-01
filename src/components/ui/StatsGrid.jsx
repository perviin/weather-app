import React from "react";
import { Wind, Droplets, Gauge, Eye } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsGrid({ weather }) {
  const stats = [
    {
      icon: Wind,
      label: "Vent",
      value: `${weather.wind.speed} km/h`,
      delay: 0.1,
    },
    {
      icon: Droplets,
      label: "Humidité",
      value: `${weather.main.humidity}%`,
      delay: 0.2,
    },
    {
      icon: Gauge,
      label: "Pression",
      value: `${weather.main.pressure} hPa`,
      delay: 0.3,
    },
    {
      icon: Eye,
      label: "Visibilité",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      delay: 0.4,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
