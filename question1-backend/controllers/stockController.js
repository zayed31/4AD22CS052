const {
    fetchPriceHistory,
    calculateAverage,
    calculateCorrelation
  } = require("../services/stockService");
  exports.getAveragePrice = async (req, res) => {
    const { ticker } = req.params;
    const { minutes, aggregation } = req.query;
    try {
      const history = await fetchPriceHistory(ticker, minutes);
      if (aggregation === "average") {
        const avg = calculateAverage(history);
        return res.json({ averageStockPrice: avg, priceHistory: history });
      }
      return res.status(400).json({ error: "Invalid aggregation" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  exports.getStockCorrelation = async (req, res) => {
    const { minutes, ticker } = req.query;
    if (!Array.isArray(ticker) || ticker.length !== 2) {
      return res.status(400).json({ error: "Exactly 2 tickers required" });
    }
    try {
      const [ticker1, ticker2] = ticker;
      const history1 = await fetchPriceHistory(ticker1, minutes);
      const history2 = await fetchPriceHistory(ticker2, minutes);
      const correlation = calculateCorrelation(history1, history2);
      const avg1 = calculateAverage(history1);
      const avg2 = calculateAverage(history2);
      return res.json({
        correlation,
        stocks: {
          [ticker1]: { averagePrice: avg1, priceHistory: history1 },
          [ticker2]: { averagePrice: avg2, priceHistory: history2 }
        }
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  