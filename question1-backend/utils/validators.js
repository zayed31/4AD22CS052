// List of valid ticker symbols from the test server
const VALID_TICKERS = [
  "AMD", "GOOGL", "GOOG", "AMZN", "AMGN", "AAPL", "BRKB", "BKNG", "AVGO",
  "CSX", "LLY", "MAR", "MRVL", "META", "MSFT", "NVDA", "PYPL", "2330TW",
  "TSLA", "V"
];

/**
 Validates a ticker symbol
 * @param {string} ticker 
 * @returns {boolean} 
 */
function validateTicker(ticker) {
  return typeof ticker === 'string' && VALID_TICKERS.includes(ticker.toUpperCase());
}

/**
 * Validates the minutes parameter
 * @param {string|number} minutes 
 * @returns {boolean} 
 */
function validateMinutes(minutes) {
  const num = Number(minutes);
  return !isNaN(num) && num > 0 && num <= 1440;
}

module.exports = {
  validateTicker,
  validateMinutes
}; 