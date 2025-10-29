// server/middleware/logger.js
// Very small request logger

function requestLogger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  // TODO: make log format configurable and send to a centralized logger
  next();
}

module.exports = { requestLogger };
