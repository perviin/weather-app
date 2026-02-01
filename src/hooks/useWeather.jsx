import { useState, useEffect } from "react";
import { fetchWeatherData } from "../lib/api/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Paris");
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(cityName);
      setWeather(data);
    } catch (err) {
      setError(err.message || "Impossible de récupérer les données météo");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setCity(searchInput);
      fetchWeather(searchInput);
      setSearchInput("");
    }
  };

  const retryFetch = () => {
    fetchWeather(city);
  };

  return {
    weather,
    loading,
    error,
    city,
    searchInput,
    setSearchInput,
    handleSearch,
    retryFetch,
  };
}
