function calculateAverage(prices) {
    if (!prices || prices.length === 0) return 0;
    const total = prices.reduce((sum, p) => sum + p.price, 0);
    return total / prices.length;
  }
  function pearsonCorrelation(arrX, arrY) {
    const n = Math.min(arrX.length, arrY.length);
    if (n === 0) return 0; 
    const meanX = arrX.reduce((a, b) => a + b, 0) / n;
    const meanY = arrY.reduce((a, b) => a + b, 0) / n;  
    let numerator = 0;
    let denomX = 0;
    let denomY = 0;
    for (let i = 0; i < n; i++) {
      const dx = arrX[i] - meanX;
      const dy = arrY[i] - meanY;
      numerator += dx * dy;
      denomX += dx * dx;
      denomY += dy * dy;
    }
    return numerator / Math.sqrt(denomX * denomY);
  }
  module.exports = { calculateAverage, pearsonCorrelation };
  