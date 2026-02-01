import React from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  CloudFog,
} from "lucide-react";

export default function WeatherIcon({ condition, size = 80 }) {
  const iconProps = {
    size,
    strokeWidth: 1.5,
    className: "text-blue-600",
  };

  const icons = {
    clear: <Sun {...iconProps} />,
    clouds: <Cloud {...iconProps} />,
    rain: <CloudRain {...iconProps} />,
    drizzle: <CloudDrizzle {...iconProps} />,
    thunderstorm: <CloudLightning {...iconProps} />,
    snow: <CloudSnow {...iconProps} />,
    mist: <CloudFog {...iconProps} />,
    fog: <CloudFog {...iconProps} />,
  };

  return icons[condition] || <Cloud {...iconProps} />;
}
