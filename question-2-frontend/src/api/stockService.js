import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getStockPrices = async (ticker, minutes) => {
  const res = await axios.get(`${BASE_URL}/stocks/${ticker}?minutes=${minutes}&aggregation=average`);
  return res.data;
};

export const getStockCorrelation = async (minutes, ticker1, ticker2) => {
  const res = await axios.get(`${BASE_URL}/stockcorrelation?minutes=${minutes}&ticker=${ticker1}&ticker=${ticker2}`);
  return res.data;
};
