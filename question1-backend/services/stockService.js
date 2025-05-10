require("dotenv").config();
const axios = require("axios");
const { calculateAverage, pearsonCorrelation } = require("../utils/mathUtils");
const BASE_URL = "http://20.244.56.144/evaluation-service/stocks";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const fetchPriceHistory = async (ticker, minutes) => {
  let lastError;
  const token = process.env.ACCESS_TOKEN;
  console.log("Using token:", token?.slice(0, 30) + "...");
  if (!token) {
    throw new Error("ACCESS_TOKEN is not defined in environment variables.");
  }
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`[Attempt ${attempt}] → Fetching: ${BASE_URL}/${ticker}?minutes=${minutes}`);
      const response = await axios.get(`${BASE_URL}/${ticker}?minutes=${minutes}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
        timeout: 5000
      });
      const data = response.data;
      if (Array.isArray(data)) {
        return data;
      } else if (data.stock) {
        return [data.stock];
      } else {
        throw new Error("Unexpected response format.");
      }
    } catch (error) {
      lastError = error;
      console.error(`❌ Error on attempt ${attempt}: ${error.message}`);
      if (attempt < MAX_RETRIES) {
        console.log(`⏳ Retrying in ${RETRY_DELAY * attempt} ms...`);
        await sleep(RETRY_DELAY * attempt);
      }
    }
  }
  throw new Error(`Failed to fetch price history after ${MAX_RETRIES} attempts: ${lastError.message}`);
};
const calculateCorrelation = (history1, history2) => {
  const sorted1 = [...history1].sort((a, b) => new Date(a.lastUpdatedAt) - new Date(b.lastUpdatedAt));
  const sorted2 = [...history2].sort((a, b) => new Date(a.lastUpdatedAt) - new Date(b.lastUpdatedAt));
  const alignedPrices = [];
  let i = 0, j = 0;
  while (i < sorted1.length && j < sorted2.length) {
    const time1 = new Date(sorted1[i].lastUpdatedAt);
    const time2 = new Date(sorted2[j].lastUpdatedAt);
    if (Math.abs(time1 - time2) < 60000) {
      alignedPrices.push({
        price1: sorted1[i].price,
        price2: sorted2[j].price
      });
      i++;
      j++;
    } else if (time1 < time2) {
      i++;
    } else {
      j++;
    }
  }
  if (alignedPrices.length < 2) {
    throw new Error("Insufficient aligned data for correlation calculation");
  }
  const prices1 = alignedPrices.map(p => p.price1);
  const prices2 = alignedPrices.map(p => p.price2);
  return pearsonCorrelation(prices1, prices2);
};

module.exports = {
  fetchPriceHistory,
  calculateAverage,
  calculateCorrelation
};
