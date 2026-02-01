/**
 * Récupère la période de la journée
 */
export function getDayPeriod() {
  const hour = new Date().getHours();
  if (hour < 6) return "nuit";
  if (hour < 12) return "matin";
  if (hour < 18) return "après-midi";
  return "soir";
}

/**
 * Retourne le gradient CSS selon la période
 */
export function getBackgroundGradient() {
  const period = getDayPeriod();
  const gradients = {
    matin: "from-[#f7f9ff] via-[#f8f1ff] to-[#fff4fb]",
    "après-midi": "from-[#eef6ff] via-[#f3f0ff] to-[#fff6fb]",
    soir: "from-[#f2f1ff] via-[#f7f2ff] to-[#fff5f8]",
    nuit: "from-[#e9f0ff] via-[#f2edff] to-[#fff1f8]",
  };
  return gradients[period];
}

/**
 * Formate la date actuelle
 */
export function formatDate() {
  return new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Formate l'heure actuelle
 */
export function formatTime() {
  return new Date().toLocaleTimeString("fr-FR");
}
