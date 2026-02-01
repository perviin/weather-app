export async function fetchWeatherData(cityName) {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const response = await fetch(
    `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`,
  );

  if (!response.ok) {
    throw new Error("Ville introuvable");
  }

  return await response.json();

  return {
    name: cityName,
    main: {
      temp: Math.floor(Math.random() * 30) + 5,
      feels_like: Math.floor(Math.random() * 30) + 3,
      humidity: Math.floor(Math.random() * 40) + 40,
      pressure: Math.floor(Math.random() * 50) + 990,
    },
    weather: [
      {
        main: randomWeather,
        description: getWeatherDescription(randomWeather),
        icon: "03d",
      },
    ],
    wind: {
      speed: (Math.random() * 15 + 1).toFixed(1),
    },
    visibility: Math.floor(Math.random() * 5000) + 5000,
    sys: {
      country: "FR",
    },
  };
}

function getWeatherDescription(type) {
  const descriptions = {
    Clouds: "nuageux",
    Clear: "ensoleillé",
    Rain: "pluvieux",
    Drizzle: "bruine",
    Snow: "neigeux",
  };
  return descriptions[type] || "variable";
}

export async function fetchCitySuggestions(query) {
  if (query.length < 2) return [];

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/geo/1.0/direct";

  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&limit=5&appid=${API_KEY}`,
    );

    if (!response.ok) return [];

    const data = await response.json();
    return data.map((city) => ({
      name: city.name,
      country: city.country,
      state: city.state || "",
      displayName: city.state
        ? `${city.name}, ${city.state} (${city.country})`
        : `${city.name} (${city.country})`,
    }));
  } catch (err) {
    console.error("Erreur lors de la récupération des suggestions:", err);
    return [];
  }
}
