import React from "react";
import { useEffect } from "react";
import { useWeather } from "../../hooks/useWeather";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";
import WeatherCard from "./WeatherCard";
import StatsGrid from "../ui/StatsGrid";
import Footer from "../ui/Footer";
import LoadingState from "../ui/LoadingState";
import ErrorState from "../ui/ErrorState";
import { getBackgroundGradient } from "../../lib/utils/helpers";
import { updateFaviconByWeather } from "../../lib/utils/faviconUtils";

export default function WeatherApp() {
  const {
    weather,
    loading,
    error,
    searchInput,
    handleSearch,
    retryFetch,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    handleInputChange,
    handleSelectSuggestion,
  } = useWeather();

  useEffect(() => {
    if (weather) {
      updateFaviconByWeather(weather);
    }
  }, [weather]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={retryFetch} />;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient()} p-4 md:p-8 transition-all duration-1000`}
    >
      <div className="max-w-5xl mx-auto">
        <Header />

        <SearchBar
          searchInput={searchInput}
          onInputChange={handleInputChange}
          onSubmit={handleSearch}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          onSelectSuggestion={handleSelectSuggestion}
          setShowSuggestions={setShowSuggestions}
        />

        <WeatherCard weather={weather} />

        <StatsGrid weather={weather} />

        <Footer />
      </div>
    </div>
  );
}
