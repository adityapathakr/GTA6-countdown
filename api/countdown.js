export default function handler(req, res) {
  const releaseDate = new Date("2026-11-19T00:00:00Z");
  const now = new Date();
  const diff = releaseDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  res.status(200).json({
    days,
    hours,
    minutes,
    formatted: `${days}d ${hours}h ${minutes}m`
  });
}
