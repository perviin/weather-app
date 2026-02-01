import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ weather }) {
  return (
    <div className="glass-card rounded-[3rem] p-8 md:p-12 mb-6 slide-in">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
          {weather.name}, {weather.sys.country}
        </h2>

        <div className="float-animation inline-block my-8">
          <WeatherIcon
            condition={weather.weather[0].main.toLowerCase()}
            size={120}
          />
        </div>

        <div className="mb-4">
          <div className="text-7xl md:text-8xl font-bold text-slate-800">
            {Math.round(weather.main.temp)}°
          </div>
          <p className="text-2xl md:text-3xl text-slate-600 font-light capitalize mt-2">
            {weather.weather[0].description}
          </p>
        </div>

        <p className="text-xl text-slate-600 font-light">
          Ressenti: {Math.round(weather.main.feels_like)}°
        </p>
      </div>
    </div>
  );
}
