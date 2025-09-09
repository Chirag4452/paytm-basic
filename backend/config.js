//backend/config.js
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    console.warn("WARNING: JWT_SECRET not set, using development fallback. Set JWT_SECRET environment variable in production!");
}

module.exports = {
	JWT_SECRET: jwtSecret || "dev-fallback-change-in-production-123456789"
}