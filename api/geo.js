// Returns the visitor's country code from Vercel's edge geolocation header.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ country: req.headers['x-vercel-ip-country'] || null });
}
