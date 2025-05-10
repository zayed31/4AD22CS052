const express = require("express");
const router = express.Router();
const { getAveragePrice, getStockCorrelation } = require("../controllers/stockController");

// Get average stock price for last m minutes
router.get("/:ticker", getAveragePrice);

// Get correlation between two stocks
router.get("/correlation/compare", getStockCorrelation);

module.exports = router;
