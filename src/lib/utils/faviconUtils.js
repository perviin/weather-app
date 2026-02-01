export function updateFaviconByWeather(weather) {
  if (!weather || !weather.weather) return;

  const weatherMain = weather.weather[0].main.toLowerCase();
  const iconMap = {
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    drizzle: "🌦️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
    smoke: "💨",
    haze: "🌫️",
    dust: "🌪️",
    fog: "🌫️",
    sand: "🌪️",
    ash: "🌋",
    squall: "💨",
    tornado: "🌪️",
  };

  const emoji = iconMap[weatherMain] || "🌡️";
  setFavicon(emoji);
}

function setFavicon(emoji) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#4B5563";
  ctx.fillRect(0, 0, 64, 64);

  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 32, 32);

  const faviconLink =
    document.querySelector("link[rel='icon']") || createFaviconLink();
  faviconLink.href = canvas.toDataURL("image/png");
}

function createFaviconLink() {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  document.head.appendChild(link);
  return link;
}
