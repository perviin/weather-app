import { useState, useEffect } from "react";
import {
  fetchWeatherData,
  fetchCitySuggestions,
} from "../lib/api/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Paris");
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const handleInputChange = (value) => {
    setSearchInput(value);

    if (value.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setShowSuggestions(true);

    const timer = setTimeout(async () => {
      const citySuggestions = await fetchCitySuggestions(value);
      setSuggestions(citySuggestions);
    }, 200);

    return () => clearTimeout(timer);
  };

  const handleSelectSuggestion = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
    setSearchInput("");
    setSuggestions([]);
    setShowSuggestions(false);
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
    suggestions,
    showSuggestions,
    setShowSuggestions,
    handleInputChange,
    handleSelectSuggestion,
  };
}
